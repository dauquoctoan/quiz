export const renderEmoji = (
    emoji:
        | string
        | {
              name: string;
              color?: string;
          },
) => {
    if (!emoji) return;
    if (typeof emoji === 'object')
        return (
            <span
                style={{ color: emoji.color || 'var(--color-special-primary)' }}
                className="material-symbols-rounded text-lg"
            >
                {emoji.name}
            </span>
        );
    else
        return isNaN(parseInt(emoji))
            ? emoji
            : String.fromCodePoint(parseInt(emoji));
};
