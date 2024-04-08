import './index.css';
import {
    useEditor,
    EditorContent,
    BubbleMenu,
    EditorContentProps,
    JSONContent,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import { Extension } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import Image from '@tiptap/extension-image';
import MenuPopover from './menuPopover';
import Underline from '@tiptap/extension-underline';
import Code from '@tiptap/extension-code';
import Strike from '@tiptap/extension-strike';
import Italic from '@tiptap/extension-italic';
import Document from '@tiptap/extension-document';
import TaskItem from '@tiptap/extension-task-item';

import TaskList from '@tiptap/extension-task-list';
import { useCallback, useEffect, useState } from 'react';
import uploadService from '@/services/uploadservice';
import APP_CONFIG, { getConfigs } from '@/configs';

export const FontSize = Extension.create({
    name: 'fontSize',
    addOptions() {
        return {
            types: ['textStyle'],
            defaultFontSize: '16px',
        };
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: this.options.defaultFontSize,
                        parseHTML: (element) =>
                            element.style.fontSize ||
                            this.options.defaultFontSize,
                        renderHTML: (attributes) => {
                            if (!attributes.fontSize) {
                                return {};
                            }
                            return {
                                style: `font-size: ${attributes.fontSize}`,
                            };
                        },
                    },
                },
            },
        ];
    },
});

export interface ITipTap {
    onChange?: (e: JSONContent) => void;
    defaultValue?: string;
    className?: string;
}

type IProps = ITipTap &
    // ICurentFieldProps &
    Omit<EditorContentProps, 'editor' | 'ref' | 'editor'>;

export default function TiptapPopover(props: IProps) {
    const [loading, setLoading] = useState(false);

    const {
        onChange,
        defaultValue,
        // error,
        // disableMessage,
        className = '',
    } = props;

    const editor = useEditor({
        extensions: [
            Document,
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            StarterKit.configure({
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Italic,
            Underline,
            Code,
            Image,
            Placeholder.configure({
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        return `Heading ${node.attrs.level}`;
                    }
                    if (
                        node.type.name === 'image' ||
                        node.type.name === 'table'
                    ) {
                        return '';
                    }

                    return "Press '/' for commands...";
                },
                includeChildren: true,
            }),
            Strike,
            TextStyle,
            FontSize,
        ],
        onUpdate: async ({ editor }) => {
            if (editor.getHTML() == '<p></p>') onChange && onChange({});
            else {
                onChange && onChange(editor.getJSON());
            }
        },
        content: defaultValue || ' ',
    });

    editor?.setOptions({
        editorProps: {
            handlePaste: () => {
                if (loading) return;
                void (async (e) => {
                    setLoading(true);
                    const clipboardItems = await navigator.clipboard.read();
                    setLoading(false);
                    const clipboardItem = clipboardItems[0];
                    const { types } = clipboardItem;
                    const type = types[0];
                    const blob = await clipboardItems[0].getType(type);
                    if (/(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(type)) {
                        const formData = new FormData();

                        formData.append(
                            'image',
                            new File(
                                [blob],
                                new Date().getTime() + '.' + type.split('/')[1],
                                { type },
                            ),
                        );

                        try {
                            const file: any = await uploadService.uploadImage(
                                formData,
                            );
                            editor
                                .chain()
                                .focus()
                                .setImage({
                                    src:
                                        APP_CONFIG.NEXT_PUBLIC_STATIC +
                                        '/images/' +
                                        file?.image_url,
                                })
                                .run();
                        } catch (e) {
                            console.error(e);
                        }
                    }
                })();
            },
        },
    });

    useEffect(() => {
        if (props?.value == '') {
            editor?.commands.setContent(' ');
        }
    }, [props.value]);

    return (
        <div
            onClick={() => {
                editor?.chain().focus().run();
            }}
        >
            <div>
                {editor && <MenuPopover editor={editor} />}
                <EditorContent
                    style={{
                        outline: 'none',
                        maxHeight: 400,
                        overflowY: 'auto',
                    }}
                    editor={editor}
                />
            </div>
        </div>
    );
}
