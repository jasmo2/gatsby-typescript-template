import * as React from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const underline = css`
  text-decoration: underline;
`;

interface IndexPageProps {
  data: any;
  // {
  //   CMS: {
  //     data: {
  //       description: {
  //         html: string
  //         text: string
  //       }
  //       page_title: {
  //         html: string
  //         text: string
  //       }
  //     }
  //   }
  // }
}
export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <Container>
        <h1>Hi people</h1>
        <p>
          Welcome to your new{" "}
          <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
