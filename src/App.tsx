import React from 'react';
import { useTranslation } from 'react-i18next';
import CardMaxTwoSpeakers from './Components/CardMaxTwoSpeakers/CardMaxTwoSpeakers';
import Theme from './Assets/Theme/ThemeProvider';

function App() {
  const { t } = useTranslation();

  return (
    <Theme>
      <CardMaxTwoSpeakers time={'15:00PM'} category={'panel discussion'} heading={'This is a heading H5, with a 96 max character. Ideal character number is 76. Space for 4 lines. '} speakers={{}}/>
    </Theme>
  );
}

export default App;
