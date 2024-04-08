import React from 'react';
import { Controller } from 'react-hook-form';
import TiptapPopover, { ITipTap } from './tiptapPopover';
// import { IFieldProps } from '../types';
import { EditorContentProps } from '@tiptap/react';

type Iprops = ITipTap &
    // IFieldProps &
    any &
    Omit<EditorContentProps, 'editor' | 'ref' | 'editor'>;

const TiptapPopoverField: React.FC<Iprops> = ({
    name,
    control,
    rules,
    errors,
    ...res
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <TiptapPopover
                    error={fieldState.error?.message || fieldState.error?.type}
                    {...field}
                    {...res}
                />
            )}
        />
    );
};

export default TiptapPopoverField;
