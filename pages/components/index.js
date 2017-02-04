import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import ArcDropdownExample from '../../components/library/ArcDropdown';

class Components extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <ArcDropdownExample />
      </Layout>
    );
  }

}

export default Components;
