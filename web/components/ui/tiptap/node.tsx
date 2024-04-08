import { cn } from '@/helpers';
import { Editor } from '@tiptap/react';
import React, { useState } from 'react';
import { FiBold } from 'react-icons/fi';
import { MdOutlineFormatListNumbered } from 'react-icons/md';
import {
    PiCheckSquareOffset,
    PiCodeSimple,
    PiListBulletsLight,
    PiTextAlignLeftLight,
    PiTextHOneLight,
    PiTextHThreeLight,
    PiTextHTwoLight,
} from 'react-icons/pi';
import { TfiAngleDown } from 'react-icons/tfi';

const Node = ({ editor }: { editor: Editor }) => {
    const [open, setOpen] = useState(false);

    const node = [
        {
            name: 'Text',
            icon: PiTextAlignLeftLight,
            command: () =>
                editor
                    .chain()
                    .focus()
                    .toggleNode('paragraph', 'paragraph')
                    .run(),
            isActive: () =>
                editor.isActive('paragraph') &&
                !editor.isActive('bulletList') &&
                !editor.isActive('orderedList'),
        },
        {
            name: 'H1',
            isActive: () => editor.isActive('heading', { level: 1 }),
            command: () =>
                editor.chain().focus().toggleHeading({ level: 1 }).run(),
            icon: PiTextHOneLight,
        },
        {
            name: 'H2',
            isActive: () => editor.isActive('heading', { level: 2 }),
            command: () =>
                editor.chain().focus().toggleHeading({ level: 2 }).run(),
            icon: PiTextHTwoLight,
        },
        {
            name: 'H3',
            isActive: () => editor.isActive('heading', { level: 3 }),
            command: () =>
                editor.chain().focus().toggleHeading({ level: 3 }).run(),
            icon: PiTextHThreeLight,
        },
        {
            name: 'Todo list',
            isActive: () => editor.isActive('taskList'),
            command: () => editor.chain().focus().toggleTaskList().run(),
            icon: PiCheckSquareOffset,
        },
        {
            name: 'Number list',
            isActive: () => editor.isActive('orderedList'),
            command: () => editor.chain().focus().toggleOrderedList().run(),
            icon: MdOutlineFormatListNumbered,
        },
        {
            name: 'Bullet list',
            isActive: () => editor.isActive('bulletList'),
            command: () => editor.chain().focus().toggleBulletList().run(),
            icon: PiListBulletsLight,
        },
        {
            name: 'Code',
            isActive: () => editor?.isActive('code'),
            command: () => editor.chain().focus().toggleCode().run(),
            icon: PiCodeSimple,
        },
    ];

    const activeItem = node.filter((item) => item.isActive()).pop() ?? {
        name: 'Multiple',
    };
    return (
        <div className="relative cursor-pointer flex items-center gap-1 border-r px-2">
            <button
                onClick={() => {
                    setOpen(!open);
                }}
                className="flex items-center gap-1"
                type="button"
            >
                <span>{activeItem?.name}</span>
                <TfiAngleDown className="text-sm" />
            </button>
            {/* {open && (
                <div className="border rounded absolute bg-theme-primary px-2 mt-2 py-1 animate-popUp origin-top-left top-[100%] left-0 w-[200px] shadow-theme-primary">
                    {node.map((item, index) => {
                        return (
                            <button
                                key={index}
                                type="button"
                                onClick={() => {
                                    setOpen(false);
                                    return item.command();
                                }}
                                className={cn(
                                    'p-2 text-custom-text-300 hover:bg-theme-secondary active:bg-color-special-secondary rounded transition-colors flex w-full',
                                    {
                                        'text-custom-text-100 bg-color-special-secondary':
                                            item.isActive(),
                                    },
                                )}
                            >
                                <div className="flex items-center gap-2 w-max">
                                    <item.icon
                                        className={cn('h-4 w-4', {
                                            'text-custom-text-100':
                                                item.isActive(),
                                        })}
                                    />
                                    <span className="text-sm font-medium">
                                        {item.name}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            )} */}
        </div>
    );
};

export default Node;
