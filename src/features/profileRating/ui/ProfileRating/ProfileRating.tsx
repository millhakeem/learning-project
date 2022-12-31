import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    useGetProfileRating,
    useRateProfile,
} from '../../api/profileRatingApt';

interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation('profile');

    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();

    const handlerateProfile = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    userId: userData?.id ?? '',
                    profileId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                //handle error
                console.log(e);
            }
        },
        [profileId, rateProfileMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handlerateProfile(starsCount, feedback);
        },
        [handlerateProfile],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handlerateProfile(starsCount);
        },
        [handlerateProfile],
    );

    if (isLoading) {
        return <Skeleton width={'100%'} height='140' />;
    }
    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            feedbackTitle={t('Оставьте отзыв')}
            title={t('Оцените профиль')}
            className={className}
            hasFeedback
        />
    );
});
