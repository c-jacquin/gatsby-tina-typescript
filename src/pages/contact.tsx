/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphql } from 'gatsby';
import { useLocalJsonForm } from 'gatsby-tinacms-json';
import React from 'react';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import pageForm from '../@cms/form/page';
import Blocks from '../components/blocks';
import PageLayout from '../layouts/page';

const ContactPage: React.FC<{ data: any }> = ({ data }) => {
  const [values] = useLocalJsonForm(data.pagesJson, pageForm) as any;

  // const position = [lat, lng];

  return (
    <PageLayout>
      <Blocks sections={values.sections || []} allFile={data.allFile} />
      {/* <Map center={position} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map> */}
    </PageLayout>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageQuery {
    pagesJson(fileRelativePath: { regex: "/contact/" }) {
      rawJson
      id
      fileRelativePath
      ...SectionsBlock
    }
    allFile {
      ...FluidImg
    }
  }
`;
