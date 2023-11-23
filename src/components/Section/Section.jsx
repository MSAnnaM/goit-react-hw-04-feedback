import React from 'react';
import styles from './Section.module.css'

export class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={styles.title}>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}
