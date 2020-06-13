import React from 'react';
import styles from '../cssModules/Home.module.css';

/* Above the Home component inside Home.js */
class InfoCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsData: [
        { id: 0, body: 'This is the first posts body', firstname: 'Tom', lastname: 'Harper', user_title: 'Computer Scientist', post_date: 'Feb 3, 2019' },
        { id: 1, body: 'This is the second posts body', firstname: 'Johmsi', lastname: 'YouTuber', user_title: 'Computer Scientist', post_date: 'Jan 12, 2020' },
        { id: 2, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', firstname: 'Coder', lastname: 'McGee', user_title: 'Google Dev', post_date: 'Dec 24. 2016' },
        { id: 3, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', firstname: 'Coder', lastname: 'McGee', user_title: 'Google Dev', post_date: 'Dec 24. 2016' },
        { id: 4, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', firstname: 'Coder', lastname: 'McGee', user_title: 'Google Dev', post_date: 'Dec 24. 2016' },
        ]
    }
  }
  render() {
    return (
      <div>
        {
          this.state.postsData.map((post) => {
            return (
              <div className={ styles.infocard } key={ post.id }>
              </div>
            )
          })
        }
      </div>
    )
  }
}
function Home() {
  return (
    <div className={ styles.container }>
      <InfoCards></InfoCards>
    </div>
  );
}
export default Home;