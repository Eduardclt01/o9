import React from 'react';
import { useTranslation } from 'react-i18next';
import CardMaxTwoSpeakers from './Components/Cards/CardMaxTwoSpeakers';
import Theme from './Assets/Theme/ThemeProvider';
import GlobalFonts from './Assets/Fonts/fonts';
import CardMaxFiveSpeakers from './Components/Cards/CardMaxFiveSpeakers';
import CardHighlightedSpeakers from './Components/Cards/CardHighlightedSpeaker';

function App() {
  const { t } = useTranslation();

  return (
    <Theme>
      <GlobalFonts />
      <CardMaxTwoSpeakers time={'15:00PM'} category={'panel discussion'} heading={'This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. '} speakers={{}}/>
      <CardMaxFiveSpeakers time={'15:00PM'} category={'panel discussion'} heading={'This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. '} speakers={{}}/>
      <CardHighlightedSpeakers time={'15:00PM'}  heading={'This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. '} speaker={{}}/>

    </Theme>
  );
}

export default App;
