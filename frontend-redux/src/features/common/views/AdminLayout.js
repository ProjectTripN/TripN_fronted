import { ChatBotIcon } from "features/chatbot";
import { Footer, Header } from "..";
import styles from "features/common/style/MyLayout.module.scss";

const AdminLayout = (props) => {
  return (
    <>
      <div className={styles.trip_wrapper}>
        <div className={styles.trip_container}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.content}>{props.children}</div>
          <div className={styles.chatbot}>
            <ChatBotIcon />
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
