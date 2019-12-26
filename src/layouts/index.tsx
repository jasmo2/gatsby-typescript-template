import * as React from 'react'

import './index.css'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        {this.props.children()}
      </div>
    )
  }
}

export default DefaultLayout
