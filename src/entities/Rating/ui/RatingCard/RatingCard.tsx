import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { className, feedbackTitle, hasFeedback, onAccept, onCancel, title } =
        props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHadler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHadler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount);
    }, [onAccept, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} align='center' />
            <Input
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align='center' gap='8'>
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen}>
                    <VStack max gap='32'>
                        {modalContent}
                        <HStack max justify='end' gap='8'>
                            <Button onClick={acceptHadler}>
                                {t('Отправить')}
                            </Button>
                            <Button
                                onClick={cancelHadler}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Закрыть')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHadler}>
                    <VStack gap='32'>
                        {modalContent}
                        <Button onClick={acceptHadler}>{t('Отправить')}</Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
