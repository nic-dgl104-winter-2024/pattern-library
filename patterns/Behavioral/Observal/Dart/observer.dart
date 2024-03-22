void main() {
  // Create subject
  var website = Website();

  // Create observers
  var user1 = User();
  var user2 = User();

  // Register observers to the subject
  website.addUser(user1);
  website.addUser(user2);

  // Notify Users when some event occurs

  // notify user when promotion updated
  website.publishPromotion(); 
  // notify user when privacy terms updated
  website.updatePrivacyTerm(); 
}

enum Events {
  policy,
  promotion,
  article,
}

// Subject interface
abstract class Subject {
  void addUser(User user);
  void removeUser(User user);
  void notifyUsers(Events event);
}

// Subject
class Website implements Subject {
  List<User> _users = [];

  @override
  void addUser(User user) {
    _users.add(user);
  }

  @override
  void removeUser(User user) {
    _users.remove(user);
  }

  @override
  void notifyUsers(Events event) {
    for (var user in _users) {
      user.update(event);
    }
  }

  void publishPromotion() {
    notifyUsers(Events.promotion);
  }

  void updatePrivacyTerm() {
    notifyUsers(Events.policy);
  }
}

// Observer
class User {
  void update(Events event) {
    print('User is notified!, event: - $event');
  }
}