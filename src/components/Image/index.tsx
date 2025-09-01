import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';

type ImageNode = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
  publicURL: string;
  extension: string;
  relativePath: string;
};

const Image = ({ src, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(placeholder: NONE, formats: [AUTO, WEBP], quality: 80)
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () => data.images.edges.find(({ node }: { node: ImageNode }) => src === node.relativePath),
    [data, src],
  );

  if (!match) return null;

  const {
    node: { childImageSharp, publicURL, extension },
  }: { node: ImageNode } = match;

  if (extension === 'svg' || !childImageSharp) {
    return <img src={publicURL} alt={publicURL} {...rest} />;
  }

  // 새로운 gatsby-plugin-image API 사용
  const image = getImage(childImageSharp);

  if (!image) {
    return <img src={publicURL} alt={publicURL} {...rest} />;
  }

  // GatsbyImage는 기본 props만 전달
  return <GatsbyImage image={image} alt={rest.alt || publicURL} />;
};

export default Image;
