import { cn } from '@/helpers';
import { BubbleMenu, Editor } from '@tiptap/react';
import React from 'react';
import { AiOutlineStrikethrough } from 'react-icons/ai';
import { BsTypeStrikethrough } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { FiBold, FiCode, FiItalic, FiUnderline } from 'react-icons/fi';
import { TfiAngleDown, TfiArrowTopRight } from 'react-icons/tfi';
import Link from './link';
import Node from './node';
import {
    PiCheckSquareOffset,
    PiTextHOneLight,
    PiTextHTwoLight,
} from 'react-icons/pi';

interface IMenuPopover {
    editor: Editor;
}

const MenuPopover: React.FC<IMenuPopover> = ({ editor }) => {
    const menus = [
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
            name: 'Todo list',
            isActive: () => editor.isActive('taskList'),
            command: () => editor.chain().focus().toggleTaskList().run(),
            icon: PiCheckSquareOffset,
        },
    ];

    return (
        <BubbleMenu
            editor={editor}
            tippyOptions={{ duration: 100 }}
            className="bg-theme-primary flex items-center rounded border shadow-theme-primary"
        >
            {menus.map((item, index) => {
                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => item.command()}
                        className={cn(
                            'p-2 text-custom-text-300 hover:bg-theme-secondary active:bg-color-special-secondary transition-colors',
                            {
                                'text-custom-text-100 bg-color-special-secondary':
                                    item.isActive(),
                            },
                        )}
                    >
                        <item.icon
                            className={cn('h-4 w-4', {
                                'text-custom-text-100': item.isActive(),
                            })}
                        />
                    </button>
                );
            })}
        </BubbleMenu>
    );
};

export default MenuPopover;
