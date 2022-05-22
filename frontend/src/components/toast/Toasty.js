export default class Toasty {
  // singleton
  static instance;
  notifications = [];
  static getInstance() {
    if (!Toasty.instance) {
      Toasty.instance = new Toasty();
    }
    return Toasty.instance;
  }

  constructor() {
    this.notifications = [
      {
        id: Math.random(),
        title: "Welcome to the app!",
        paragraph: "You can now use the app.",
      },
    ];
  }
  Add(title, paragraph) {
    this.notifications.push({
      id: Math.random(),
      title: title,
      paragraph: paragraph,
    });
  }
  Get() {
    return this.notifications;
  }
  Clear() {
    this.notifications = [];
  }
  Remove(notification) {
    this.notifications = this.notifications.filter(
      (n) => n.id !== notification.id
    );
  }
}
