import ManuscriptForm from "../../components/auther/ManuscriptForm";
import ManuscriptList from "../../components/auther/ManuscriptList";

const AuthorDashboard = () => {
  return (
    <div>
      <h1>Author Dashboard</h1>
      <ManuscriptForm />
      <hr />
      <ManuscriptList />
    </div>
  );
};

export default AuthorDashboard;
