import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

class LandingPage extends Component {
  static getInitialProps(props) {
    return { message: 'Landing page' };
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <style dangerouslySetInnerHTML={{__html: `
           @font-face {
            font-family: 'Ciutadella-Light';
            src: url('/static/fonts/Ciutadella-Light.eot');
            src: url('/static/fonts/Ciutadella-Light.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Ciutadella-Light.woff') format('woff'), url('/static/fonts/Ciutadella-Light.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
        
          @font-face {
            font-family: 'Ciutadella';
            src: url('/static/fonts/Ciutadella.eot');
            src: url('/static/fonts/Ciutadella.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Ciutadella.woff') format('woff'), url('/static/fonts/Ciutadella.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
        
          @font-face {
            font-family: 'Ciutadella-Bold';
            src: url('/static/fonts/Ciutadella-Bold.eot');
            src: url('/static/fonts/Ciutadella-Bold.eot?#iefix') format('embedded-opentype'), url('/static/fonts/Ciutadella-Bold.woff') format('woff'), url('/static/fonts/Ciutadella-Bold.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          body { 
            margin: 0;
            font-family: 'Ciutadella';
            color: #ffffff;
          }
        `}}/>
        <Layout>{this.props.message}</Layout>
      </div>
    )
  }
}

export default LandingPage;
