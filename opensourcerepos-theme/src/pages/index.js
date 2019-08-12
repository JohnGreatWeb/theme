import React, { Component } from 'react';
import { map, get, isUndefined, filter } from 'lodash';
import {Header} from '../components/header';
import { BlogList } from '../components/blog-list';
import { TwitterCard } from '../components/twitter-card';
import { BlogsSidebar } from '../components/blogs-sidebar';
import styles from './index.module.css';
import { Footer } from '../components/footer';

class IndexPage extends Component {

  render(){
    const { pageContext } = this.props;
    return <React.Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className={styles.col}>
            <BlogList data={pageContext} />
          </div>
          <div className={styles.col300}>
            {/* <BlogsSidebar /> */}
            <TwitterCard/>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  }
}

export default IndexPage;