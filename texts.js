var currMapInfo = 0, currWT = 0, currWM = 0, currHF = 0, currNP = 0;

var mapInfoTexts = [
	"Water bodies provide great refuge to plants and animals, as well as filter the water, making it clean to drink. \
	At the same time, a lot of things can negatively affect the quality of the water, like pollutants and fertilizer. \
	Plainsboro has multiple lakes and streams, as can be seen on the map.", 
	"Waste management refers to how responsibly waste is recycled or disposed of, from industrial waste to roadside litter.\
	 In Plainsboro, there is a recycling center, shown on the map", 
	"Housing developments and farming must be done in a responsible manner, especially in a suburb like Plainsboro, which has\
	 a mix of both, which can be seen on the map.",
	"Nature preserves provide an excellent way for a community to learn about its natural environment and a habitat for many \
	species. The Plainsboro Preserve serves this purpose, with a large forested area and lake visible on the map."
];
var mapInfoColors = ["#ffaa80", "#ff99ff", "#99ddff", "#ff8080"]; 
var backgroundMapImageURLs = ["./MapImages/Orange.png", "./MapImages/Purple.png", "./MapImages/Blue.png", "./MapImages/Red.png"];

var WTHeaderTexts = ["Overview", "In Plainsboro", "Goals"]; 

var WTInfo = [
	"In a suburban environment, there are many things that can affect the quality of the water. Often, chemicals in the \
	water can affect its quality. Water runoff, must be clean: people's front yards may contain many pesticides and chemicals\
	just as farms and fields have many fertilizers. All of this ends up in the sewer, and then into a natural water body. Apart\
	from chemicals, trash and litter can also harm plants and animals, and this must be disposed of.<br><br>\
	Water usage itself is important, especially considering that we shouldn't use too much, in residential, industrial, and\
	agricultural settings.<br><br>Overall, water bodies present a vital ecosystem for many species, and we must be responsible\
	with them.",
	"In Plainsboro, a municipal official affirms that the aforementioned benefits exist on the local scale. She also\
	stated that Plainsboro's farmers do an excellent job, and are very responsible when it comes to water usage, and there are\
	certain regulations in place that limit how much water can be used.<br><br>The Plainsboro Preserve plays a large role in managing\
	Plainsboro's natural waters, as in it exists a lake and some small streams. It routinely disposes of litter to keep the area as\
	 clean as possible.<br><br>The Plainsboro Preserve is certainly successful, as it boasts its biodiversity and refuge to many\
	 native water-dwelling species, including fish and birds.",
	"As Plainsboro seems well off in terms of properly managing water in the town, there are many things that can be done on an\
	individual basis to help the water systems.<br><br>Environmentalists strongly recommend that the average person try to limit\
	the amount of water he uses on a daily basis.<br><br>The average person should also be mindful of what goes into the water.\
	Pesticides and fertilizers should be avoided in lawns and gardens. Realize that anything that goes into the sink will eventually\
	end up in the waterways. Don't dump chemicals like medicines into the sinks or toilets."
]; 
var WTCaption = ["Infographic Describing Water Runoff", "The Plainsboro Preserve Lake", 
"Avoiding use of pesticides can help save the environment!"]; 
var WTImg = ["./WTImages/WaterRunoff.png", "./WTImages/PlainsboroPreserveLake.png", "./WTImages/AvoidPesticides.png"]; 

var WMInfo = [
	"A healthy suburban environment requires that on an individual and industrial basis, waste is properly disposed of, or recycled.\
	It also includes keeping nature clean, eliminating road or trail-side litter.<br><br>The more items are recycled, the less need\
	there is to keep producing more of them, processes which can harm the environment. Litter can have disastrous effects on wildlife,\
	as some animals get can choke on small plastic items.<br><br>Plastics can take many hundreds of years to decompose, so it's\
	improtant to use biodegradable materials as much as possible.",
	"In Plainsboro, a municipal official described the waste management company it works with, Suez, as a great company\
	to work with. They put a large focus on developing solutions to efficiently process waste. It should also be mentioned that\
	Plainsboro is lucky to have a recycling center.<br><br>As for roadside litter, the official explains that during the Winter season,\
	litter peaks, but it's regularly cleaned twice a year. Most of it comes from escaping cars and garbage trucks.",
	"Plainsboro does fairly well in terms of waste management, but there is a lot that can be improved upon on the individual basis,\
	rather than from the government.<br><br>For one, there are many opportunities for people to volunteer at nature preserves to help\
	clean up roadside litter. For just one day, one can improve Plainsboro aesthetically as well as help the environment.<br><br>It's\
	also important to buy products that are biodegradable, recycle as much as possible, and be mindful of any trash that escapes its\
	proper container. Perhaps using reusable items like cloth bags as opposed to plastic, to produce less trash altogether is the\
	best option possible."
];
var WMCaption = ["Trash Should Always End Up In Its Proper Container", "Cleaning Up Roadside Litter", "A Cloth Bag For Groceries"]; 
var WMImg = ["./WMImages/Trash.png", "./WMImages/Litter.png", "./WMImages/ClothBag.png"]; 

var HFInfo = [
	"Housing and farming are prime examples of human actions that have direct effects on the physical environment. Almost certainly,\
	there will be environmental damage, such as loss of biodiversity and habitat for wildlife, and lots of energy used to import materials,\
	so it's important to be as responsible\
	as possible when engaging in these two activities.<br><br>As aforementioned, housing inevitably causes the destruction of its area,\
	as well as affects the water flow, but one thing that can be changed is the amount of housing, compared to the amount of space\
	reserved for a natural landscape.<br><br>As far as agriculture is concerned, farms must be responsible with not only their water\
	use, but also their fertilizer and pesticide use.", 
	"Plainsboro is a growing suburban community, and with it, new housing developments come. Often, farms are sold off to housing\
	developers, and many dwellings are constructed to house people. This is often called 'the suburban sprawl,' where large swathes\
	of land are used inefficiently for housing -- the homes are spread apart, hence the 'sprawl.'<br><br>Plainsboro mitigates the\
	environemntal damage by protecting its nature preserves, reserving 50 percent of its land as open space, and encouraging energy-\
	saving techniques.<br><br>The farmers here are also responsible, performing tests on the soil before they use pesticides and\
	herbicides, and at the same time limiting their use.",
	"Plainsboro should certainly continue to do what it's been doing -- it recognizes that the town is inevitably going to grow in size,\
	and the best way to preserve the environment is to minimize the impact.<br><br>It should try to meet its goal of having 50 percent\
	of the land reserved for open space, and continue encouraging people to use renewable solar energy. Farmers should also keep up their\
	conscious for the health of the environment.<br><br>On an individual basis, people can help reduce one of the main effects of\
	suburban sprawl -- the constant use of automobiles to get from place to place, since destinations are relatively far apart. People\
	should try their best to walk or ride their bicycles whenever possible."
];
var HFCaption = ["Housing Constructon Radically Alters The Local Environment", "Open Spaces Such As Parks Help Not Only The Environment, \
But Also The Well Being Of The Community", "Riding Bicycles Can Reduce Carbon Emissions"]; 
var HFImg = ["./HFImages/Housing.png", "./HFImages/OpenSpace.png", "./HFImages/Bicycle.png"]; 

var NPInfo = [
	"Suburbs often have designated areas of greenery, mainly parks and preserves. Preseves do the job of protecting the environment,\
	setting aside land for nature to take over.<br><br>Such areas are home to wildlife and trees. Trees especially do a large part in\
	the carbon cycle, specifically by reducing the greenhouse gas carbon dioxide.<br><br>People can also enjoy themselves, strolling \
	through the woods and hoping to get a glimpse of an animal. Often, these areas have many opportunities for people to both learn about \
	the environment as well as how to help it.",
	"Plainsboro's Plainsboro Preserve achieves everything a preserve is supposed to do. It includes forested land that is home to many\
	species of birds and larger animals, like foxes and deer. Its center lake and streams are a habitat to many fish species.<br><br>\
	The Plainsboro Preserves lakes, streams, and forests also play a large role in water filtration, and can inform scientists a lot\
	on environmental concerns and conservation efforts, such as studying the populations that inhabit the area, and measuring the air\
	and water quality.<br><br>The Plainsboro Preserve, does, of course, also offer children and adults opportunities to understand their\
	environment, as people can take part in activities like planting trees and cleaning litter.",
	"Plainsboro is certainly lucky to have a nature preserve, easily accessible to anyone. The benefits of nature preserves go further:\
	not only do animals find a safe home, but it has also been shown that people living near nature can have a boost of morale, even in\
	a modern, industrialized society.<br><br>Thus, is it is important for everyone to learn about environmentalism, and the Plainsboro\
	Preserve can promote more activities that can get people of all ages involved."
];
var NPCaption = ["A Description Of The Carbon Cycle", "Deer Are Common Wildlife In Plainsboro", "Children At Summer Camp At The \
Plainsboro Preserve"]; 
var NPImg = ["./NPImages/CarbonCycle.jpg", "./NPImages/Wildlife.png", "./NPImages/Activities.png"]; 

var qnum = 1, curr = 0, correct = 0; 
var questions = [
	"Which is not an effect of too much fertilizer ending up in lakes and streams?",
	"It is better to use paper bags compared to plastic, because...",
	"Suburban sprawl refers to...",
	"Nature preserves serve what purpose for a community?",
	"Can natural landscapes help to purify water?",
	"It's okay to litter, when...",
	"Agricultural has what effect on the environment?",
	"Nature preserves have which immediate effect on their local environments?" 
]; 
var explanations = [
	"The purpose of fertilizers, in agriculture and in homes, is to promote growth of certain plants. However,\
	it can wash into storm drains and into water bodies, causing environmental damage.",
	"Paper bags generally have a few advantages: they are made easily recycled, and even can decompose much\
	easier compared to plastic. Plastic bags can also cause many hazzards to wild animals that get stuck\
	on them.",
	"Suburban sprawl, as its name implies, refers to single family homes spread across a large\
	region, with shopping centers are away from houses. Dependancy on automobiles is a\
	trait. People should walk or use public transportation when possible.",
	"Nature preserves first and foremost protect the flora and fauna of a region. People benefit almost as\
	much when they can enjoy themselves in nature, building a connection with the natural landscape.\
	Activities that can harm the environment should be excluded.",
	"Streams and rivers are ecosystems that are incredibly resilient, and very helpful to humans. As the\
	water flows downstream, chemical contaminans are lost over time, and eventually the water gets more pure \
	naturally, becoming safe to drink. Of course, too much damage can be irreversible.",
	"There is virtually no reason to litter. Not only does it look unclean, but wildlife is affected, \
	whether you're in the wild or in your yard. The wind and water can take trash great distances, anyways. \
	One should also not take chances with disposing waste. If unsure, it should be disposed of in a trash can.",
	"Agriculture almost does the opposite of the choices. It almost certainly will have an effect on the\
	wildlife -- a variety of plants and trees are replaced with a single type of crop, which reduces \
	biodiversity and habitat for animals. However, we see again that nature is resilient, and forests can \
	reclaim farmland within decades.",
	"Nature preserves can have many effects on the local environment, such as improving the water and air \
	quality. However, the overall temperature of the air and precipitation levels are influenced by many \
	factors, and it can't be pinned down to an individual nature preserve." 
]; 
var options = [
    ["Death of plants in gardens and lawns",
    "Large increase of growth of algae",
    "Many fish and other animals die",
    "Unsafe drinking water for animals"],
    ["Plastic bags can cause harm to wild animals",
    "Paper is biodegradable",
    "Paper is recyclable",
    "All of the above"],
    ["Densely packed urban areas with everything in walkable distance",
    "Set apart homes which force people to use automobiles often, polluting the environment",
    "Animal species spreading throughout a suburban community",
    "Chemicals released from houses that cause environmental damage"],
    ["A source of commercial wood",
    "A place to send dirty water so it can be cleaned naturally",
    "A connection for people with nature",
    "A place to hunt and fish"],
    ["Yes, because the animals consume the chemicals for their own benefit",
    "Yes, as the water moves along rocks and vegetation, it gets cleaner",
    "No, flowing water is less clean",
    "No, it can only be done with manmade water purifiers"],
    ["Almost never",
    "You are not in the wilderness",
    "You think the trash is biodegradable",
    "There are no trash cans nearby"],
    ["Increases biodiversity",
    "Increases habitat space for animals",
    "Cause permanent environmental damage",
    "None of the above"],
    ["Can influence water and air quality",
    "Can lower nearby temperature",
    "Can increase nearby temperature",
    "Can increase precipitation"],
];
var correctMsgs = ["Great!", "Nice!", "Correct!", "That's right!"];
var ansNums = [1, 4, 2, 3, 2, 1, 4, 1]; 
