/*  Lazy Implemenation of Singleton: 
  The main problem with the basic implmentation of the singleton, is that it has the draw-back of being created client-side
  even if the client is not using it, While this is some-what shown in my basic example, It got an tad complex doing it free-hand 
  Therefore I'll give an slightly edited version (So it can run) of Kishore Purohit's Singleton in Dart: (Refrence down below) 
  Code example, and provide how it works in my Read.Me 

  Refrences Used: https://stackoverflow.com/questions/59459976/lazy-singleton-vs-singleton-in-dart, https://medium.com/@kishore_p18/singleton-in-dart-2c4f63c2b60c
  alongside https://www.educative.io/answers/what-is-the-late-keyword-in-dart#:~:text=In%20Dart%2C%20we%20use%20the,we%20use%20the%20late%20keyword, https://stackoverflow.com/questions/68965626/why-do-we-need-to-add-late-modifier-while-declaring-the-variables/68965815
  and https://stackoverflow.com/questions/69312956/flutter-late-keyword-with-declaration#:~:text=when%20you%20add%20late%20before,first%20it%20will%20be%20used.&text=Scenario%202-,late%20String%20name%3B,instance%20field%20must%20be%20initialized.
  As Well as the previous sources used earlier
*/

class LazyInitializedSingleton{
    /* Late (KeyWord) Ensures that will be inistalized later, I.e making them non-nullable as they are declared
        After decleration */
    static late LazyInitializedSingleton _instance;
    // Refrence that is used later in internal memory in order to create the instance when called
    LazyInitializedSingleton._internal();


    /* Declares, and Inistalizes the instase when called. Instead of automatically being delcared, instead of the basic
      implmentation which is always created, and in my instance, makes sure there is no duplicates created. */

    static LazyInitializedSingleton getInstance(){
      /* Checks to make sure that the instilastion variable exisits in memory, Late makes it non-nullable, so 
        This will never run, so it will always return false in the instance, however not using late gives 
          an Null-pointer exception, it will always return the Instance, instead, to fix this you chould use

          _instance ??= LazyInitializedSingleton._internal(); so that it is assigned only if the righthand side, only if 
          the left side is null, This is mainly used when reffering to the article. */

      if(_instance == null){
        _instance = LazyInitializedSingleton._internal();
      }
      /* Returns the static late LazyInitializedSingleton _instance; if using the previous thing below, 
      it whould return the Internal instance */
      
      return _instance;
  }
}

