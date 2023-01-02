/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();

    return (
        <Page
            data-testid='ProfilePage'
            className={classNames('', {}, [className])}
        >
            <VStack gap='16' max>
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id!} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
