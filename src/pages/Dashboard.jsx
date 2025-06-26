import Profile from "../components/Profile";
import Activities from "../components/Activities";

const Dashboard = () => {
    return (
        <div className="p-4 grid md:grid-cols-2 gap-4">
            <Profile />
            <Activities />
        </div>
    );
};
export default Dashboard;
