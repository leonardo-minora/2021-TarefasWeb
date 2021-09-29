import React from 'react';

const AppBulletList = props => (
  <div className="card">
    <div className="card-content">
      <p className="title">
        {props.title}
      </p>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        <span>
          View on
          <a href="https://twitter.com/codinghorror/status/506010907021828096">
            Twitter
          </a>
        </span>
      </p>
      <p className="card-footer-item">
        <span>
          Share on <a href="#">Facebook</a>
        </span>
      </p>
    </footer>
  </div>
);

export default AppBulletList;
