import {
    ReviewContainer,
    ReviewItems, ReviewPlane,
    ReviewRefresh, ReviewShield, ReviewStar, ReviewTitle
} from './review.styles';

const Review = () => {
    return (
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
    )
}

export default Review;