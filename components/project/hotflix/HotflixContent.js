import * as styled from './styles';

import Image from 'next/image';

export default function HotflixContent() {
  return (
    <styled.Hotflix>
      <styled.TextContainer>
        <styled.Title>Bliss Venue</styled.Title>
        <styled.Description>
        Bliss venue is a wedding and events planning website that helps wedding planners manage their business, keep track of time worked and generate reports for either the venues or the wedding planner,{' '}
          <span>
         
          </span>
        </styled.Description>
        <styled.Table>
          <tbody>
            <tr>
              <th>Stack</th>
              <th>Live</th>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>React
              </td>
              <td>
                <a href="http://blissvenue.x10.bz/wp/">
                  <span className="link">Site</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>NextJs
              </td>
              <td>
                <a href="https://github.com/Terryohana/">
                  <span className="link">Code</span>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <span className="arrow">▹</span>Styled-Components
              </td>
              
              <td></td>
            </tr>
          </tbody>
        </styled.Table>
      </styled.TextContainer>
      <styled.ImageContainer>
        <Image
          src="/images/hotflix/blissweb.png"
          alt="hotflix demo"
          width={1266}
          height={720}
        />
      </styled.ImageContainer>
      <styled.TextContainer>
        <styled.SubTitle>Project Purpose and Goal</styled.SubTitle>
        <styled.Description>
        
Our vision for the details of your special day from Music to transportation to entertainment to floral and lighting will be carefully documented,{' '}
          <span>
            
          </span>
        </styled.Description>
      </styled.TextContainer>
     
    
     
    
    </styled.Hotflix>
  );
}
