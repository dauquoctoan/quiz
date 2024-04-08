import { Istate } from '@/types';
import { ReactElement } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { CiCircleMore } from 'react-icons/ci';
import { FaRegCircle } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { TbProgress } from 'react-icons/tb';

export function getIcons(group: string = '', color = 'red'): ReactElement {
    switch (group) {
        case 'backlog':
            return <TbProgress style={{ color: color }} />;
        case 'cancelled':
            return <IoCloseCircleOutline style={{ color: color }} />;
        case 'completed':
            return <IoIosCheckmarkCircleOutline style={{ color: color }} />;
        case 'started':
            return <CiCircleMore style={{ color: color }} />;
        case 'unstarted':
            return (
                <FaRegCircle
                    style={{ color: color }}
                    className={`text-[11px]`}
                />
            );
        default:
            return <IoCloseCircleOutline style={{ color: color }} />;
    }
}

export function convertDataOptions(data: Istate[] | undefined) {
    return (
        data?.map((e) => ({
            title: e.name || '',
            value: e?.id.toString(),
            icon: getIcons(e.group, e.color),
        })) || []
    );
}
