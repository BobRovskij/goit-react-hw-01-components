import Profile from "./Profile/Profile";
import user from "../Data/user";
import Statistics from "./Statistics/Statistics";
import statisticsData from "../Data/data";
import FriendList from "./FriendList/FriendList";
import dataAboutFriends from "../Data/friends";
import transactions from "../Data/transactions";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={statisticsData} />
      <FriendList items={dataAboutFriends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
