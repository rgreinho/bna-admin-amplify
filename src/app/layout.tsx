import '@Styles/fonts.css';
import '@Styles/resets.css';
import '@Styles/base.css';
import '@Styles/layout.css';
import '@Styles/theme.css';
import '@Styles/utilities.css';

import AmplifyAuth from '@Components/AmplifyAuth';


function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BNA Dashboard</title>
        <style>@layer fonts, resets, base, layout, theme;</style>
      </head>
      <body>
        <AmplifyAuth>
          {children}
        </AmplifyAuth>
      </body>
    </html>
  );
}


export default RootLayout;
