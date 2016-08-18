import React from 'react';
import { Link } from 'react-router';

// React.cloneElement passess down props from Main to the first child, which in this case
// will be rendered as PhotoGrid. If you go to the developer window in Chrome (F12), and drill down from thr Provider tag
// you will see this to be the case

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Flamingo City</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
