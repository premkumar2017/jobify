import styled from 'styled-components';

const Wrapper = styled.section`
nav{
  width:var(--fluid-width);
  max-width:var(--max-width);
  marign;0 auto;
  height: var(--nar-height);
  display: flex;
  align-items: center;
  
}
.page{
  min-height:calc(100vh - var(--nav--height));
  display: grid;
  align-items: center;
  margin-top:--3 rem;

}
h1{
  front-weight:700;
  span{
    color:var(--primary-500);
  }
  margin-bottom:1.5rem;
}
p{
  line-height:2;
  color:var(--text-secondary-color);
  margin-bottom:1.5rem;
  max-width: 35em;
}
register-link{
  margin-right:1rem;
}
.main-img{
  display: none;
}
.btn{
  padding:0.7rem 1rem;
  margin-left:10PX;
}
@media(min-width:992px){
  .page{
    grid-template-columns:1fr 400px;
    column-grap:3rem;
    
  }
  main-img{
    display:block;
  }
}
`;


 
export default Wrapper;
