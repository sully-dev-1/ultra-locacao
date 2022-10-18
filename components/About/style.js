import styled from "styled-components";

export const AboutUsContainer = styled.section`
    background: url('https://raw.githubusercontent.com/thiagosullivan/ultra-locacao/main/assets/banner-about.webp');
    background-size: cover;
    background-attachment: fixed;
    background-position: 100% 50%;
    background-repeat: no-repeat;

    .about__content {
        max-width: 1300px;
        width: 100%;
        margin: 0 auto;
        position: relative;
        padding: 11rem 1rem;
        
        /* h2 {
            font-family: 'Kanit', sans-serif;
            font-size: 7.5rem;
            line-height: 0.7;
            color: ${({theme}) => theme.secondary};
            text-shadow: 0px 5px 0px rgba(0, 0, 0, 0.4);
            font-weight: bold;
            text-align: right;
            position: absolute;
            z-index: 1;

            span {
                font-family: 'Kanit', sans-serif;
                font-size: 6.25rem;
                line-height: 0.7;
                font-weight: 400;
            }
        } */

        p {
            font-family: 'Kanit', sans-serif;
            color: ${({theme}) => theme.third};
        }

        .about__div1 {
            max-width: 475px;
            width: 100%;
            margin-left: auto;

            p {
                text-align: justify;
            }
        }

        .about__div2 {
            display: flex;
            justify-content: flex-end;
            margin-top: 6rem;
            .about__img1 {
                margin-right: 1.87rem;
            }
        }

        .about__div3 {
            max-width: 650px;
            width: 100%;
            background-color: rgba(255,255,255,.7);
            box-shadow: 0 2px 10px 2px rgba(0, 0, 0, .1);
            padding: 2rem;
            /* margin: 3.75rem 0 0 auto; */

            p {
                text-align: justify;
            }
        }
    }
`