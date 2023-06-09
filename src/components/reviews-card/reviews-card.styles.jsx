import styled from "styled-components";
import { ReactComponent as PlaneIcon } from '../../assets/review-assets/plane.svg';
import { ReactComponent as RefreshIcon } from '../../assets/review-assets/refresh.svg';
import { ReactComponent as ShieldIcon } from '../../assets/review-assets/shield.svg';
import { ReactComponent as StarIcon } from '../../assets/review-assets/star.svg';

export const ReviewContainer = styled.ul`
    position: relative;
    list-style: none;
    background-color: #ececec;
    padding: 0;
    margin-top: 6em;
    text-align: center;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export const ReviewItems = styled.li`
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ReviewPlane = styled(PlaneIcon)`
    width: 45px;

    @media (max-width: 768px) {
        width: 30px
    }

    @media (max-width: 400px) {
        width: 25px
    }
`;

export const ReviewRefresh = styled(RefreshIcon)`
    width: 45px;

    @media (max-width: 768px) {
        width: 30px
    }

    @media (max-width: 400px) {
        width: 25px
    }
`;

export const ReviewStar = styled(StarIcon)`
    width: 45px;

    @media (max-width: 768px) {
        width: 30px
    }

    @media (max-width: 400px) {
        width: 25px
    }
`;

export const ReviewShield = styled(ShieldIcon)`
    width: 45px;

    @media (max-width: 768px) {
        width: 30px
    }

    @media (max-width: 400px) {
        width: 25px
    }
`;

export const ReviewTitle = styled.h4`
    padding: 0.2em;
    margin-left: 1em;
    
    @media (max-width: 400px) {
        font-size: 0.75rem;
    }

    @media (max-width: 300px) {
        font-size: 0.6rem;
    }
`;