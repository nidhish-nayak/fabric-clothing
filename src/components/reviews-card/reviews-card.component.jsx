import { Fragment } from 'react';
import {
    ReviewCardTitle,
    ReviewContainer,
    ReviewItems, ReviewPlane,
    ReviewRefresh, ReviewShield, ReviewStar,
    ReviewTitle
} from './reviews-card.styles';

const ReviewsCard = () => {
    return (
        <Fragment>
            <ReviewCardTitle>
                WE OFFER
            </ReviewCardTitle>
            <ReviewContainer>
                <ReviewItems>
                    <ReviewPlane />
                    <ReviewTitle>
                        WORLDWIDE SHIPPING
                    </ReviewTitle>
                </ReviewItems>
                <ReviewItems>
                    <ReviewRefresh />
                    <ReviewTitle>
                        EASY RETURNS
                    </ReviewTitle>
                </ReviewItems>
                <ReviewItems>
                    <ReviewStar />
                    <ReviewTitle>
                        HIGH QUALITY PRODUCTS
                    </ReviewTitle>
                </ReviewItems>
                <ReviewItems>
                    <ReviewShield />
                    <ReviewTitle>
                        SAFE AND SECURE
                    </ReviewTitle>
                </ReviewItems>
            </ReviewContainer>
        </Fragment>
    )
}

export default ReviewsCard;