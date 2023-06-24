import styled from "styled-components";

export const ProfileContainer = styled.div`

    position: relative;
    margin-top: 0.4em;

    img {
        margin: 0px 0px 0px 1em;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        cursor: pointer;
    }

    @media (max-width: 786px) {
        img {
            margin: 0px 0px 0px 0.5em;
            border-radius: 50%;
            width: 26px;
            height: 26px;
            cursor: pointer;
        }
    }

`
