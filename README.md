# Run application on Docker
Make sure that you have Docker installed.

Use ```./start.sh``` script to generate the docker image and run it into docker.

# Run application in development mode
Just run ```npm i ``` and then ```npm run start```

# Steps Taken
    - Create Application from scratch.
    - Create Docker files.
    - Create application Layout Components: Header, Footer and Layout.
    - Create Grid components: Container, Row, Column.
    - Create component with Rakuten svg Logo (retrieved from production website).
    - Create MovieThumbnail component.
    - Install react-responsive-carousel package.
    - Create Carousel components: CarouselSection, CarouselSlide and MovieCarousel.
    - Create Modal component.
    - Create MovieDetail component
    - Create Logo Component for Dolby and Imdb.
    - Implement Scrollbar on Modal.
    - Apply some styles on MovieDetail component.
    - Download redux and redux-saga
    - Configure redux store
    - Create Controller for the api requests.
    - Create an Infrastructure HTTPService for retrieve data from the api.
    - Create an Interface Apadter Mapper to transform the data retrieved on the service into our defined data types.
    - Use controller method GetMovieList in order to retrieve movie lists
    - Use controller method GetMovieById in order to retrieve the movie detail.
    - Create videoPlayer component.
    - Create service method to get the video stream.
    - Create mapper method to transform the data retrieved from server.
    - Create controller method to retrieve the data stream.
    - Create Logos for ExpandFullscreen, CollapseFullscreen, GoBack and implement it on movie player.
    - Show and hide video player custom buttons when mouse moves or stops. 
# Todo
    - Apply some custom styles on carousel.
    - Disable app scrollbar when modal is open.
    - Correct style on images not found.
    - Correct movieDetail updating (it has some blinking with the contents of the previous state)
    - Hide default video controls and create custom components to handle video controls.
    - Install test environment and create tests.
    - Create express server to expose the application on deployment.


# Keeping the application scalable
## Create your methods to retrieve data from RakutenTV
Define your methods on ```IMovieRepository``` and ```IMovieGateway```.
Implement those methods on ```RakutenTvMovieMapper``` and ```HttpRakutenTvService```.

## Defining a gateway method
Add your line with the definition of the new method. Note that input and output of all methods are of type any.

This is not a random fact. Service definitions wouldn't know anything about what it comes as a parameter and what it comes out.
With this, we gain flexibility in order to realize the same service implementations at different sources. 

## Implementing a gateway method on Service
Create your method, instead of accept an ```any``` as parameter (as we declare at previous step) create the specific DTO to your method and use it as parameter.
Same way with the returning promise. Create another DTO to use it as return type.

The data from both DTO will be the same that returns the api, so be careful. (Copilot works really fine with that)

## Defining a repository method
Add your line with the definition of the new method. Create an specific DTO for input and output.

## Defining a repository method on Mapper
Create your method. This method will use the Service method you've just implemented.
In this method get the input get from parameters and map in something that fits in service's method input.
As the same way, map the output from service's method in something that fits in your output DTO.

## Defining UseCase
Create your use case method on src/rakutenTv/domain/useCases with your DTOs.
In this method you will use all the repository methods that you need, ff you do it, it will has it's own DTO.
If you call just at one repository method, you can use the same DTOs as repository method.

## Defining contoller method
Create the controller method. This will be exposed to be used on react application.

## Defining reducer
Create the reducer actions that will handle the interactions with the UI. These actions uses the MovieController, which is injected by context, giving access to all the Rakuten API defined on interfaces.

# References
 - Create react typescript app without CRA: https://www.sharooq.com/react-18-the-root-index-ts-file-in-a-typescript-project
