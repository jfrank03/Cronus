class Temperature{
    constructor(name, effect, description, max_temp, min_temp, rating){
        this.name = name;
        this.effect = effect;
        this.description = description;
        this.maxTemp = max_temp;
        this.minTemp = min_temp;
        this.rating = rating;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getEffect(){
        return this.effect;
    }

    setEffect(effect){
        this.effect = effect;
    }

    getDescription(){
        return this.description;
    }

    setDescription(desc){
        this.description = desc;
    }

    getMaxTemp(){
        return this.maxTemp;
    }

    setMaxTemp(temp){
        this.maxTemp = temp;
    }

    getMinTemp(){
        return this.minTemp;
    }

    setMinTemp(temp){
        this.minTemp = temp;
    }

    getRating(){
        return this.rating;
    }

    setRating(rating){
        this.rating = rating;
    }
}

class Condition{
    constructor(category, intensity, effect, rating){
        this.category = category;
        this.intensity = intensity;
        this.effect = effect;
        this.rating = rating;
    }

    getCategory(){
        return this.category;
    }

    setCategory(cat){
        this.category = cat;
    }

    getIntensity(){
        return this.intensity;
    }

    setIntensity(int){
        this.intensity = int;
    }

    getEffect(){
        return this.effect;
    }

    setEffect(eff){
        this.effect = eff;
    }

    getRating(){
        return this.rating;
    }

    setRating(rat){
        this.rating = rat;
    }
}

//Declare all weather conditions and temperatures.
let incrediblyCold = new Temperature('Incredibly cold', 'DC10 Constitution saving throw every 5 minutes or gain one level of exhaustion.', 'Lethally cold without precautions.', -80, -460, -5);
let extremelyCold = new Temperature('Extremely cold', 'DC10 Consitution saving throw every 10 minutes or gain one level of exhaustion.', 'Spit goes "clink"', -21, -79, -4);
let severelyCold = new Temperature('Severely cold', 'DC10 Consitution saving throw every 30 minutes or gain one level of exhaustion.', 'Frostbite likely without precautions', 0,-20,-3);
let cold = new Temperature('Cold', 'DC10 Consitution saving throw every hour or gain one level of exhaustion.', 'Water freezes. Frostbite possible.', 32, 0, -2);
let mildCold = new Temperature('Mildly cold', 'Light cold is bearable.', 'Typically comfortable in warm clothing.', 60, 33, -1)
let comfortable = new Temperature('Comfortable', 'A comfortable temperature.', 'A comfortable temperature.', 79, 61, 0);
let mildHot = new Temperature('Mildly Hot', 'Mild heat is bearable.', 'Typically comfortable in light clothing.', 90, 80, 1);
let hot = new Temperature('Hot', 'DC10 Consitution saving throw every hour or gain one level of exhaustion.', 'Light clothing require for long periods.',104, 91, 2);
let severelyHot = new Temperature('Severely hot', 'DC10 Consitution saving throw every 30 minutes or gain one level of exhaustion. Creatures must drink double the amount of water normally required or make this roll with disadvantage.', 'Heat exhaustion likely, and heat stroke possible with prolonged exposure.', 125, 104, 3);
let extremelyHot = new Temperature('Extremely hot', 'DC10 Consitution saving throw every 10 minutes or gain one level of exhaustion. Creatures must drink double the amount of water normally required or make this roll with disadvantage.', 'Heat stroke is highly likely.', 140, 126, 4);
let incrediblyHot = new Temperature('Incredibly hot', 'DC10 Consitution saving throw every 5 minutes or gain one level of exhaustion. Creatures must drink double the amount of water normally required or make this roll with disadvantage.', 'Lethally hot without precautions.', 451, 140);

const allTemps = [incrediblyCold,extremelyCold,severelyCold,cold,mildCold,comfortable,mildHot,hot,severelyHot,extremelyHot,incrediblyHot];

let noWind = new Condition('Wind', 'None', '', 0);
let blowingWind = new Condition('Wind', 'Blowing', '', -1);
let howlingWind = new Condition('Wind', 'Howling', 'Howling wind causes disadvantage on ranged attacks & hearing perception checks, worsens visibility, and extinguishes flames while rendering non-magical flight impossible.', -2);

let noPrecip = new Condition('Precipitation', 'None', '', 0);
let gentlePrecip = new Condition('Precipitation', 'Gentle', 'Gently falling precipitation causes disadvantage on Perception.', -1);
let heavyPrecip = new Condition('Precipitation', 'Heavy', 'Heavy precipitation extinguishes fires and causes poor visibility in addition to disadvantage on all perception checks.',-2);

let noHumidity = new Condition('Humidity', 'Low', '', 0);
let moderateHumidity = new Condition('Humidity', 'Moderate', 'Moderate humidity moves the temperature one step away from comfortable.', 1);
let highHumidity = new Condition('Humidity', 'High', 'High humidity moves the temperature two steps away from comfortable.', 2);

let normalVisibility = new Condition('Visibility', 'Normal', '', 0);
let poorVisibility = new Condition('Visibility', 'Poor', 'Poor visibility causes disadvantage on vision perception checks.', 0);
let horribleVisibility = new Condition('Visibility', 'Horrible', 'Horrible visibility causes creatures to be effectively blind beyond 30 feet.',0);

//List of possible temperatures and conditions for a given region. 
class Region{
    //Both arguments should be arrays. 
    constructor(name, possibleTemps, possibleConditions){
        this.name = name;
        this.possibleTemps = possibleTemps;
        this.possibleConditions = possibleConditions;
        this.currentTemp = null;
        this.wind = null;
        this.humidity = null;
        this.precipitation = null;
        this.numericalTemperature = 0;
        this.feelsLike = null;
        this.visibility = null;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getPossibleTemps(){
        return this.possibleTemps;
    }

    addPossibleTemp(temp){
        this.possibleTemps.push(temp);
    }

    getPossibleConditions(){
        return this.possibleConditions;
    }

    addPossibleCondition(cond){
        this.possibleConditions.push(cond);
    }

    getCurrentTemp(){
        return this.currentTemp;
    }

    //Sets current temperature object & a numerical temperature within its possible range of temperatures.
    setCurrentTemp(temp){
        this.currentTemp=temp;
        
        let range = this.getCurrentTemp().getMaxTemp() - this.getCurrentTemp().getMinTemp();
        let x = Math.round(Math.random()*range);
        this.setNumericalTemp(this.getCurrentTemp().getMinTemp() + x);
    }

    getWind(){
        return this.wind;
    }

    setWind(wind){
        this.wind = wind;
    }

    getPrecip(){
        return this.precipitation;
    }

    setPrecip(precip){
        this.precipitation = precip;
    }

    getHumidity(){
        return this.humidity;
    }

    setHumidity(hum){
        this.humidity = hum;
    }

    getNumericalTemp(){
        return this.numericalTemperature;
    }

    setNumericalTemp(temp){
        this.numericalTemperature = temp;
    }

    getVisibility(){
        return this.visibility;
    }

    setVisibility(vis){
        this.visibility = vis;
    }

    getFeelsLike(){
        return this.feelsLike;
    }

    setFeelsLike(feeling){
        this.feelsLike = feeling;
    }

    generateWeather(){
        let tempChoice = Math.floor(Math.random()*this.possibleTemps.length);
        this.setCurrentTemp(this.possibleTemps[tempChoice]);
        let allConditions = ['Wind', 'Precipitation', 'Humidity'];
    
        // Randomly choose a condition for each category
        for (let category of allConditions) {
            let conditionsInCategory = this.possibleConditions.filter(cond => cond.getCategory() === category);
            let randomChoice = Math.floor(Math.random() * conditionsInCategory.length);
            let chosenCondition = conditionsInCategory[randomChoice];
    
            switch (category) {
                case 'Wind':
                    this.setWind(chosenCondition);
                    break;
                case 'Precipitation':
                    this.setPrecip(chosenCondition);
                    break;
                case 'Humidity':
                    this.setHumidity(chosenCondition);
                    break;
                case 'Visibility':
                    this.setVisibility(chosenCondition);
                    break;
            }
        }
        
        // Setting the 'feels like' temperature
        let weatherIndex = this.getCurrentTemp().getRating() + this.getWind().getRating() + this.getPrecip().getRating();
        if (this.getCurrentTemp().getRating() >= 0) weatherIndex += this.humidity.getRating();
        else weatherIndex -= this.humidity.getRating();

        for (let temp of allTemps) {
            if (temp.getRating() === weatherIndex) {
                this.setFeelsLike(temp);
                break; // Exit loop once found
            }
        }
        this.setVisibility(normalVisibility);

        if (this.getPrecip().getIntensity() === 'Heavy') this.setVisibility(poorVisibility);
        
        if (this.getWind().getIntensity() === 'Howling') {
            if (this.getVisibility().getIntensity() === 'Poor') this.setVisibility(horribleVisibility);
            else this.setVisibility(poorVisibility);
        }
    
        this.updateWeatherBox();
    }
    
    updateWeatherBox(){
        const biomeBox = document.getElementById('biomeBox');
        const weatherTitle = document.getElementById('weatherTitle');
        const weatherFlavor = document.getElementById('weatherFlavorBox');
        const windBox = document.getElementById('windBox');
        const precipitationBox = document.getElementById('precipitationBox');
        const humidityBox = document.getElementById('humidityBox'); // Corrected variable name
        const visibilityBox = document.getElementById('visibilityBox');
        const weatherRulesetBox = document.getElementById('weatherRulesetBox'); // Corrected variable declaration
    
        biomeBox.textContent = this.getName();
        weatherTitle.textContent = `${this.getFeelsLike().getName()}`;
        weatherFlavor.textContent = this.getFeelsLike().getDescription();
        windBox.textContent = this.getWind().getIntensity();
        precipitationBox.textContent = this.getPrecip().getIntensity();
    
        if ((this.getCurrentTemp() <= 32) && (precipitationBox.textContent != 'None')) precipitationBox.textContent += ' Snow';
        else if (precipitationBox.textContent != 'None') precipitationBox.textContent += ' Rain';
    
        humidityBox.textContent = this.getHumidity().getIntensity(); // Corrected method call
        visibilityBox.textContent = this.getVisibility().getIntensity(); // Corrected method call
        
        weatherRulesetBox.textContent = `${this.getFeelsLike().getEffect()} ${this.getWind().getEffect()} ${this.getPrecip().getEffect()} ${this.getHumidity().getEffect()} ${this.getVisibility().getEffect()}`; // Corrected assignment
    } 
}

let snowyMountains = new Region('Snowy Mountains', [mildCold,cold,severelyCold],[noWind,blowingWind,howlingWind,noPrecip,gentlePrecip,heavyPrecip,noHumidity])
snowyMountains.generateWeather();

const toolTipTrigger = document.getElementById('volatilityText');
const toolTip = document.getElementById('volatilityTooltip');

//Weather generation & box update.
document.getElementById('generateWeatherButton').addEventListener('click', function(){
snowyMountains.generateWeather();
});

//Weather volatility tooltip.
toolTipTrigger.addEventListener('mouseover', function(event){
    toolTip.style.display = 'block';
    toolTip.style.left = event.pageX + 'px';
    toolTip.style.top = event.pageY + 'px';
});

toolTipTrigger.addEventListener('mouseout', function(){
    toolTip.style.display = 'none';
});