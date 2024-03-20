# DGL 104 Pattern Library
A multi-language library containing implementations of common software design and architecture patterns 



## Table of Contents



## Articles / Websites

### Model View View-Model (MVVM) - Architectural Pattern

Just like the Model View Controller (MVC) pattern, Model View View-Model (MVVM) is an architectural pattern in software development whose purpose is to provide a clear separation of concerns in applications, especially those with complex user interfaces and interactive features. In both patterns, the program logic of your application (the model) is kept separate from the user interface (the view). The View-Model (and Controller in the case of the MVC pattern) act as the mediator between the Model and View. This separation enhances the structure and maintainability of the code, making it easier to develop, test and manage.  

**Key purposes and benefits:**
* Reduces dependencies and conflicts 
* Facilitates testability
* Improves maintainability
* Data binding reduces need for boilerplate code
* Enhanced UI responsiveness
* Simplifies UI state management
* Facilitates rich and interactive UIs

#### Key Differences and Improvements on MVC pattern

The MVVM pattern differs from MVC, however, in two key respects. First, in the MVVM pattern, the view is completely decoupled from the model and relies heavily on data binding to keep the View and ViewModel synchronized. Changes in the ViewModel automatically reflect in the View through data binding without needing explicit instruction. This is a key benefit to MVVM and enables it to create dynamic responsive UIs. 

In contrast to MVC, MVVM attempts to have the least amount of code-behind (logic) in the View and moves that logic instead to the ViewModel. This complete separation makes it possible for different teams to work on different components simultaneously: designers can focus on UX needs and developers can focus on the programming of the business logic.  

Second, the ViewModel is primarily concerned with preparing data for display while the Controller in MVC directly manages application flow, deciding which content to display and reacting to user inputs by updating the Model or selecting a different view. 

**Examples of tools, frameworks and programming languages that implement the MVVM pattern:** 
* [Microsoft’s MVVM Toolkit](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/mvvm/), provides a collection of standard types that developers can use to build applications  
* [Maui](https://learn.microsoft.com/en-us/dotnet/maui/what-is-maui?view=net-maui-7.0), Microsoft’s cross-platform framework for creating native mobile and desktop apps 
* Angular 
* React
* Xamarin 
* WPF
* Kotlin 

#### References

Gallardo, E. (2023, January 9). _What is MVVM Architecture?_ Built In. https://builtin.com/software-engineering-perspectives/mvvm-architecture 

Michaelstonis. (2022, November 4). _Model-View-ViewModel - .NET._ Microsoft Learn. https://learn.microsoft.com/en-us/dotnet/architecture/maui/mvvm 

Ramotion. (2023, May 1). _Understanding MVVM: Model-View-ViewModel Architecture explained._ Web Design, UI/UX, Branding, and App Development Blog. https://www.ramotion.com/blog/what-is-mvvm/ 

## Contributions 

