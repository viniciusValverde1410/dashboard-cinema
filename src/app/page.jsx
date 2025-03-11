import styles from "./page.module.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import DashboardContent from "../components/dashboardContent";

export default function Home() {
  return (
    <div>
      <Header />

      <main className={styles.dashboardContainer}>
        <Sidebar />

        <DashboardContent />
      </main>

    </div>
  );
}
