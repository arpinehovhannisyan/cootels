import styled from 'styled-components';
export const FooterWrapper = styled.div`
        background:var(--bg-color-1);
        padding: 80px 0;
        
        &>div{
        width: 1136px;
        display: flex;
        margin: 0 auto;
    }
    `
    export const FooterCol = styled.div`
        font-size: 16px;
        line-height: 30px;
        color: #D9DBDE;

        
   
    &:nth-child(1){
        width: 585px;
        line-height: 19px;

    }
    &:nth-child(2){
        width: 207px;
    }
    &:nth-child(3){
        width: 147px;
    }
    &:nth-child(4){
        width:153px;
    }
    p{
        width: 186px;
    }
    img:nth-child(2){
        margin: 36px 24px 0;
    }
    img{
        margin-top:36px;
        
    }
    `

    
    export const ListTitle = styled.div`
    color: #fff;
    margin-bottom: 24px;
    
    `
    export const Title = styled.div`
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    `
    

    