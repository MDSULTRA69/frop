// ── Word List (5–6 letters, One Piece universe) ────────────────────────────
const WORDS = [
  { word: "LUFFY",    hint: "A hat can hold more weight than anyone expects" },
  { word: "SANJI",    hint: "One part of him fights; one part of him refuses to" },
  { word: "ROBIN",    hint: "She survived what was meant to silence her" },
  { word: "BROOK",    hint: "He kept something across an impossible distance" },
  { word: "USOPP",    hint: "His inventions and his stories share the same source" },
  { word: "JINBE",    hint: "Loyalty measured in years, not battles" },
  { word: "KAIDO",    hint: "He looked everywhere for an ending and found only more fighting" },
  { word: "ROGER",    hint: "His last breath started something that still hasn't stopped" },
  { word: "BUGGY",    hint: "He rose higher than anyone expected — partly by accident" },
  { word: "SHANKS",   hint: "A word from him can silence a room" },
  { word: "MIHAWK",   hint: "He sits at a height others spend their lives climbing toward" },
  { word: "SMOKER",   hint: "He never quit chasing what he believed was right" },
  { word: "HANCOCK",  hint: "She turned the world's cruelest judgment into something else entirely" },
  { word: "TASHIGI",  hint: "She carries blades that belong to the dead" },
  { word: "AKAINU",   hint: "He left no room for in-between" },
  { word: "KIZARU",   hint: "Fast enough to take his time" },
  { word: "AOKIJI",   hint: "He chose a different road when the road ahead was clear" },
  { word: "COBRA",    hint: "He kept a truth buried for twenty years under a crown" },
  { word: "PEDRO",    hint: "He spent everything he had and then gave a little more" },
  { word: "CARROT",   hint: "The moon changes what she is capable of" },
  { word: "VIOLA",    hint: "She can see what cannot be hidden" },
  { word: "KYROS",    hint: "Even forgotten, he never left" },
  { word: "VERGO",    hint: "No one suspected what was under the uniform" },
  { word: "MONET",    hint: "She watched over those the world had abandoned" },
  { word: "CAESAR",   hint: "He dressed up destruction as science" },
  { word: "BARTO",    hint: "His devotion embarrasses even those he worships" },
  { word: "MARCO",    hint: "Fire cannot stop what fire is made of" },
  { word: "THATCH",   hint: "He found something he was never meant to find" },
  { word: "MORIA",    hint: "He sought strength without the cost of pain" },
  { word: "ENEL",     hint: "He mistook the sky for a throne" },
  { word: "WIPER",    hint: "He carried a century of anger in every punch" },
  { word: "CONIS",    hint: "She chose the strangers over the familiar" },
  { word: "RYUMA",    hint: "A legend so stubborn it fought on after the original was gone" },
  { word: "ODEN",     hint: "He smiled at the worst moment imaginable — and it was right" },
  { word: "OROCHI",   hint: "He borrowed power and spent twenty years terrified of losing it" },
  { word: "HIYORI",   hint: "She wore another face until the right moment arrived" },
  { word: "YAMATO",   hint: "She chose a legend over her own name" },
  { word: "BEGE",     hint: "His body held more than a body should" },
  { word: "TREBOL",   hint: "His presence was worse than his powers" },
  { word: "BELLAMY",  hint: "He dismissed what he couldn't understand, then understood too late" },
  { word: "WEEVIL",   hint: "He inherited a name and swings like it's proof enough" },
  { word: "STUSSY",   hint: "The smile was the disguise" },
  { word: "CAMIE",    hint: "She found herself in the worst possible place at the worst possible time" },
  { word: "COBY",     hint: "He walked into danger by accident and kept going on purpose" },
  { word: "BONNEY",   hint: "Time bends for her in ways it doesn't for others" },
  { word: "HAWKINS",  hint: "He lets fate decide and helps fate along" },
  { word: "KILLER",   hint: "Something was taken from him that shouldn't have been" },
  { word: "UROUGE",   hint: "He arrived quietly among the loudest generation" },
  { word: "SABO",     hint: "He rose from ash and carried what was left behind" },
  { word: "KOALA",    hint: "She learned to smile because someone decided she should" },
  { word: "BEPO",     hint: "Strong enough, kind enough, and quick to tears" },
  { word: "DORRY",    hint: "He and one other have been at it longer than most nations have existed" },
  { word: "BROGY",    hint: "He kept swinging long after the reason to swing was forgotten" },
  { word: "SAULO",    hint: "He laughed when it cost him everything" },
  { word: "LUCCI",    hint: "He was the most dangerous thing in the building" },
  { word: "KAKU",     hint: "He made something ridiculous work through sheer commitment" },
  { word: "JABRA",    hint: "His arrogance was the gap in his armor" },
  { word: "BLUENO",   hint: "He opened passages where there were none" },
  { word: "FRANKY",   hint: "He poured himself into something that would outlast him" },
  { word: "PAULIE",   hint: "He fought with rope and dignity in equal measure" },
  { word: "DUVAL",    hint: "He hid his face to hide an unfortunate truth" },
  { word: "ARLONG",   hint: "He mistook cruelty for strength for a very long time" },
  { word: "PERONA",   hint: "Her ghosts take something that's harder to replace than health" },
  { word: "DRAGON",   hint: "The world's most wanted person, and most people couldn't describe his face" },
  { word: "KIDD",     hint: "He rebuilt himself around the thing that broke him" },
  { word: "APOO",     hint: "His music hits whether or not you're listening" },
  { word: "SUGAR",    hint: "A touch was all it took to erase someone completely" },
  { word: "RIKU",     hint: "He accepted a false crime to protect what he loved" },
  { word: "CAPONE",   hint: "He runs things the way people who run things usually do" },
  { word: "RAIZO",    hint: "He held the ocean's water until the exact right moment" },
  { word: "QUEEN",    hint: "He entertains between catastrophes" },
  { word: "JACK",     hint: "He considers obstacles something to destroy, not navigate" },
  { word: "KING",     hint: "He stands between the island and everything that approaches" },
  { word: "SHAKA",    hint: "The one who believed goodness was worth something" },
  { word: "LILITH",   hint: "She wore wickedness like a costume" },
  { word: "ATLAS",    hint: "She acted before she thought, every time" },
  { word: "YORK",     hint: "She wanted something the others found beneath them" },
  { word: "MOHJI",    hint: "He controls animals — in theory" },
  { word: "ALVIDA",   hint: "She remade herself into what she always believed she was" },
  { word: "KRIEG",    hint: "His armor was his confidence and his weakness" },
  { word: "NOJIKO",   hint: "She inked over the secret to protect it" },
  { word: "MAKINO",   hint: "She kept a place warm for those who left it" },
  { word: "GENZO",    hint: "He wore something ridiculous to keep a wordless promise" },
  { word: "MERRY",    hint: "She sailed longer than she should have been able to" },
  { word: "SUNNY",    hint: "She was built with love and armed with a lion's roar" },
  { word: "MOBY",     hint: "She carried the man who started it all" },
  { word: "YORU",     hint: "Black because nothing else would be enough" },
  { word: "ENMA",     hint: "It takes more than you offer and gives back something terrifying" },
  { word: "WADO",     hint: "It passed through grief to reach the hands it belongs in now" },
  { word: "STRAW",    hint: "It was given, lost, and found three times before it stayed" },
  { word: "BELI",     hint: "Every bounty in the world is counted in this" },
  { word: "HAKI",     hint: "Everyone has it; very few ever find it" },
  { word: "ZOAN",     hint: "One kind of fruit brings a creature inside the person" },
  { word: "LOGIA",    hint: "The rarest kind — when the user becomes the element" },
  { word: "NIKA",     hint: "Hidden inside a different myth for longer than anyone knew" },
  { word: "SUNA",     hint: "It pulls moisture from the air, from the ground, from the living" },
  { word: "YUKI",     hint: "Soft and silent, it covers everything equally" },
  { word: "GOMU",     hint: "Elastic in nature, endless in application" },
  { word: "WANO",     hint: "Cut off from the outside by walls of stone and a wall of water" },
  { word: "JAYA",     hint: "Where the sky island once was, before anyone believed it" },
  { word: "ELBAF",    hint: "The island every giant calls home" },
  { word: "DRUM",     hint: "A cold kingdom that lost its healers by decree" },
  { word: "PUNK",     hint: "An island that burns and freezes at once" },
  { word: "YONKO",    hint: "A name that functions like a law" },
  { word: "ENIES",    hint: "Where they declared war on the world to take back one person" },
  { word: "SORU",     hint: "Speed pressed into something that looks like teleportation" },
  { word: "GEPPO",    hint: "Steps taken against the sky itself" },
  { word: "TEKKAI",   hint: "A body made into something that barely registers a hit" },
  { word: "SHIGAN",   hint: "A finger pressed so hard it becomes something else" },
  { word: "DREAM",    hint: "The thing each of them holds that holds them together" },
  { word: "OHARA",    hint: "They were erased for knowing what the wrong people wanted unknown" },
  { word: "CLOVER",   hint: "He was stopped mid-word — and the word was the point" },
  { word: "BINKS",    hint: "This song finds its way back to anyone who sails" },
  { word: "TOKI",     hint: "She could only go one direction, so she chose carefully who to send" },
  { word: "BURGESS",  hint: "He fought in the colosseum for the sake of something far more dangerous" },
  { word: "CRACKER",  hint: "He hid behind an army so thorough it seemed endless" },
  { word: "OVEN",     hint: "He transforms the water beneath ships into something that kills them" },
  { word: "ZEUS",     hint: "A living storm that switched loyalties" },
  { word: "IMU",      hint: "They sit where no one is supposed to sit" },
  { word: "GARP",     hint: "He trained the next generation the hard way" },
  { word: "TSURU",    hint: "She had a way of cleaning up things that aren't clean" },
  { word: "KUMA",     hint: "He used what power he had left to protect those he'd been ordered to hurt" },
  { word: "HERA",     hint: "The new storm, built angrier than the last" },
  { word: "PICA",     hint: "He merged with stone and filled the island" },
  { word: "MANTRA",   hint: "The sky kingdom's name for what lets you hear intent before action" },
  { word: "BRAHAM",   hint: "He turns light itself into something that blinds and burns" },
  { word: "CALGARA",  hint: "He rang something to call back a friend who never heard it" },
  { word: "MAXIM",    hint: "It flew on lightning, steered by delusion" },
  { word: "KAYA",     hint: "She gave what she had to help someone she barely knew leave" },
  { word: "ZEFF",     hint: "He gave up part of himself so someone else could survive" },
  { word: "NAMI",     hint: "She stole from the dangerous to protect what she loved" },
  { word: "ZORO",     hint: "He trains toward a goal that only one person can ever reach" },
  { word: "REBECCA",  hint: "She fought for food because love runs on sacrifice" },
  { word: "DENJIRO",  hint: "He sustained an emotion for twenty years and let it change his face" },
  { word: "KINEMON",  hint: "He led a mission across time itself" },
  { word: "SULONG",   hint: "The transformation that costs everything to achieve" },
  { word: "NAKAMA",   hint: "A word that means more than its translation" },
  { word: "VIVRE",    hint: "A paper that always knows which way to point" },
  { word: "CLIONE",   hint: "It guides the lost through water that swallows ships" },
  { word: "REVERIE",  hint: "The world's rulers gather here and the wrong things get decided" },
  { word: "LAUGH",    hint: "He said this at the end, and it meant everything" },
  { word: "HOGBACK",  hint: "He called it love; others had different names for it" },
  { word: "ABSALOM",  hint: "Invisible and unethical in roughly equal measure" },
  { word: "GECKO",    hint: "His shadow reached farther than his power" },
  { word: "NOLAND",   hint: "He told the truth and paid for it with everything" },
  { word: "CHOPPER",  hint: "He became a doctor not to be accepted but to help" },
  { word: "ICEBURG",  hint: "He held a secret in his chest for years while building things for others" },
  { word: "SPANDAM",  hint: "He wielded authority the way the weak often do" },
  { word: "MORLEY",   hint: "He shaped the underground with his hands — not metaphorically" },
  { word: "HOLDEM",   hint: "His lion disagrees with him sometimes, loudly" },
  { word: "ARAMAKI",  hint: "He refuses what others offer and refuses to stop" },
  { word: "KATAKURI", hint: "He hid something under the cloth that mattered more than his power" },
  { word: "LINLIN",   hint: "She dreamed of a feast where every kind of person sat together" },
  { word: "LOGPOSE",  hint: "Without it, the route cannot be found" },
  { word: "PLUTON",   hint: "One of three things that could unmake the world" },
  { word: "VEGAPUNK", hint: "He understood things before the world was ready for the answers" },
  { word: "SERAPHIM", hint: "Small and devastating and unlike anything that came before" },
  { word: "PAPPUG",   hint: "He accidentally became famous by inventing a law" },
  { word: "KANJURO",  hint: "He was the one they trusted most — and shouldn't have" },
  { word: "HYOU",     hint: "A powerful man reduced to almost nothing and still defiant" },
  { word: "ASHURA",   hint: "Six arms, and it ends quickly" },

  // ── 500 New Entries ──────────────────────────────────────────────────────
  { word: "JANGO",    hint: "He made the crew sleep against their will" },
  { word: "BUCHI",    hint: "One of two who served a cat in matching form" },
  { word: "HACHI",    hint: "Six swords and a history that eventually bent toward something better" },
  { word: "CHAKA",    hint: "He guarded the kingdom in his master's absence" },
  { word: "IGARAM",   hint: "He disguised himself poorly but with tremendous commitment" },
  { word: "YOSAKU",   hint: "He rode alongside before the real crew took shape" },
  { word: "JOHNNY",   hint: "He and a friend helped a swordsman find his footing again" },
  { word: "CINDRY",   hint: "She served a master she loathed in a mansion built on shadows" },
  { word: "BOBBIN",   hint: "He swayed through Big Mom's halls keeping the larders full" },
  { word: "OPERA",    hint: "He ran the prison floors with cream-coated authority" },
  { word: "BRULEE",   hint: "She traps visitors in a world of reflections" },
  { word: "DRAKE",    hint: "He wore one coat over intentions that belonged to another" },
  { word: "SASAKI",   hint: "He and his ancient form fought on the wrong side for unclear reasons" },
  { word: "KOKORO",   hint: "She navigated the sea train and kept a secret under her hat" },
  { word: "GONBE",    hint: "A small creature who tried to eat the wrong thing and never changed" },
  { word: "MACRO",    hint: "He sold what he should not have sold near the shop that shouldn't exist" },
  { word: "GALLEY",   hint: "The shipwrights' union stood behind this name" },
  { word: "SHAKKY",   hint: "She retired from piracy but kept the bar and the stories" },
  { word: "KALIFA",   hint: "She poured something slippery over everything she touched" },
  { word: "ZAMBAI",   hint: "He led a rough crew that swore loyalty with their hands and backs" },
  { word: "PECOMS",   hint: "He served loyally until loyalty pointed somewhere else" },
  { word: "FLAMPE",   hint: "She cheered loudly for the wrong fighter at the wrong time" },
  { word: "GOTTI",    hint: "He pulls the trigger first and doesn't ask questions" },
  { word: "POUND",    hint: "He loved from a distance longer than any parent should have to" },
  { word: "DECKEN",   hint: "He threw things at what he loved and called it pursuit" },
  { word: "SHURA",    hint: "He rode through the clouds on a beast and called it justice" },
  { word: "SATORI",   hint: "He played with the clouds like a game with no losing side" },
  { word: "HOTORI",   hint: "One of two who guarded the sky kingdom's entrance" },
  { word: "KOTORI",   hint: "The other one — mirror image in both appearance and fate" },
  { word: "PAGAYA",   hint: "He taught his daughter the sky roads with quiet patience" },
  { word: "ZOMBIE",   hint: "It moves and fights but something essential is missing" },
  { word: "KUREHA",   hint: "She kept old knowledge alive in a cold kingdom" },
  { word: "WAPOL",    hint: "He inherited power and hoarded it until someone took it back" },
  { word: "SHIKI",    hint: "The floating ambition of a man who thought the age was his" },
  { word: "DADAN",    hint: "She raised boys she claimed not to care about" },
  { word: "MAGRA",    hint: "He followed the bandit chief out of something like loyalty" },
  { word: "DOGRA",    hint: "He carried the worst news back to the mountain" },
  { word: "PONEG",    hint: "Ancient stone that holds what governments tried to bury" },
  { word: "JOLLY",    hint: "The flag flies it; every crew believes in what it stands for" },
  { word: "TOTTO",    hint: "The name of the realm where only one woman's word is law" },
  { word: "OKAMA",    hint: "A haven carved into the bottom of the world's worst prison" },
  { word: "IMPEL",    hint: "The prison from which no one has ever escaped — until they did" },
  { word: "RYUGU",    hint: "The palace beneath the waves where the sea royals reside" },
  { word: "WANDA",    hint: "She sniffed out the strangers and decided they were safe" },
  { word: "OKIKU",    hint: "She chose a life that fit her spirit rather than expectations" },
  { word: "OTAMA",    hint: "She made enemies into allies with a tiny piece of something sweet" },
  { word: "SPEED",    hint: "She was taken by kindness and repaid it with loyalty" },
  { word: "PAULA",    hint: "She fights with spike-sharp precision and no patience for weakness" },
  { word: "PIRATE",   hint: "The life they chose over every safer option" },
  { word: "MARINE",   hint: "They chase what they call justice in white coats" },
  { word: "ROOKIE",   hint: "A term for the fresh generation of the most dangerous newcomers" },
  { word: "VOYAGE",   hint: "What a ship does when a crew has a reason to sail" },
  { word: "BOUNTY",   hint: "A price on a head, posted by those who want it brought in" },
  { word: "DEVIL",    hint: "The fruit that costs you the sea and gives you something else" },
  { word: "DIABLE",   hint: "He sets himself ablaze to strike with something more than force" },
  { word: "HIRYU",    hint: "A dragon in the name, a devastation in the strike" },
  { word: "SANDAI",   hint: "A cursed blade that pushes against its own wielder" },
  { word: "SHODAI",   hint: "The first of three cursed blades that bear the same family name" },
  { word: "NIDAI",    hint: "The second of three — more controlled, and rarer" },
  { word: "SHUSUI",   hint: "A black blade carried by a legend, then passed to another" },
  { word: "KIKOKU",   hint: "It cuts things that cannot normally be cut" },
  { word: "POLAR",    hint: "A submarine that slips beneath the waves with a spotted crew" },
  { word: "FOOSHA",   hint: "A village small enough to know everyone's name" },
  { word: "SYRUP",    hint: "A quiet island where a boy told stories no one believed" },
  { word: "SHELLS",   hint: "The first town a certain crew had to survive" },
  { word: "RAFTEL",   hint: "The end of the road — and also the beginning" },
  { word: "AMAZON",   hint: "An island where outsiders are a rarity and a threat" },
  { word: "GRAND",    hint: "The ocean that separates the sensible from the adventurous" },
  { word: "KARASU",   hint: "He commands crows and rarely speaks above a whisper" },
  { word: "EDISON",   hint: "The satellite driven by inspiration above all else" },
  { word: "SMILE",    hint: "An artificial thing that grants a false version of power" },
  { word: "BUBBLE",   hint: "It holds air where air has no reason to stay" },
  { word: "CIPHER",   hint: "A numbered group that operates where the government won't admit to" },
  { word: "SPHINX",   hint: "It guards the entrance to the worst prison in the world" },
  { word: "SECOND",   hint: "The mode that trades future energy for present speed" },
  { word: "FOURTH",   hint: "The mode that inflates what it already is" },
  { word: "FIFTH",    hint: "The form that laughed and changed the rules of everything" },
  { word: "SHOGUN",   hint: "The title that was taken from the one who deserved it" },
  { word: "KATANA",   hint: "The curved blade that defined a kingdom's warriors" },
  { word: "DAIMYO",   hint: "A lord in a land where lords answer to one terrible master" },
  { word: "RONIN",    hint: "A warrior without a master — some by choice, some by tragedy" },
  { word: "JITTE",    hint: "A fork-shaped weapon used to catch and break blades" },
  { word: "HAORI",    hint: "A garment worn like a cape that marks a warrior's station" },
  { word: "URANUS",   hint: "The third ancient weapon whose nature remains the best-kept secret" },
  { word: "KENBUN",   hint: "The awareness that lets you feel intent before the blow arrives" },
  { word: "TIGER",    hint: "He freed those who had never known freedom, at the cost of everything" },
  { word: "VISTA",    hint: "So skilled that even the greatest swordsman in the world acknowledged it" },
  { word: "HARUTA",   hint: "One of the commanders who rallied when it mattered most" },
  { word: "ATMOS",    hint: "He served a legend and never wavered" },
  { word: "CURIEL",   hint: "A commander who brought firepower to the battle for a friend" },
  { word: "LABOON",   hint: "It waited at the entrance to the world for a crew that promised to return" },
  { word: "CROCUS",   hint: "He kept something company until the reunion it was promised" },
  { word: "KUZAN",    hint: "His real name, rarely used after he wore the coat" },
  { word: "ISSHO",    hint: "He blinded himself so that what mattered was felt, not seen" },
  { word: "KOHZA",    hint: "He led a rebellion for the wrong reasons and the right ones at once" },
  { word: "TESORO",   hint: "He gilded everything he touched and called it paradise" },
  { word: "CARINA",   hint: "She played both sides until only one side remained" },
  { word: "INDIGO",   hint: "He painted his work in dark colors and darker methods" },
  { word: "SERAPH",   hint: "Small and devastating and unlike anything that came before" },
  { word: "LOGUE",    hint: "The town at the entrance and the exit of the most dangerous sea" },
  { word: "NEZUMI",   hint: "He wore authority like a coat but sold it when the price was right" },
  { word: "MOMOO",    hint: "A sea creature that learned to be afraid of a certain cook" },
  { word: "RICHIE",   hint: "The lion who did as he pleased and rarely listened to his keeper" },
  { word: "PEARL",    hint: "He called his defense impenetrable until someone proved otherwise" },
  { word: "CHESS",    hint: "He wore the title of strategist and swung it like a mace" },
  { word: "DALTON",   hint: "He served the wrong king until he could serve the right cause" },
  { word: "PORCHE",   hint: "She cheered louder than she fought" },
  { word: "KAROO",    hint: "He carried a princess without wings and ran without tiring" },
  { word: "NAMUR",    hint: "He dove into the thickest part of the battle without hesitation" },
  { word: "RAKUYO",   hint: "He anchored the left flank with whatever it took" },
  { word: "WATER",    hint: "The city built on the sea where ships come to be born or repaired" },
  { word: "LOBBY",    hint: "The place guarded by the weight of the world and one family's law" },
  { word: "NORTH",    hint: "One of the four seas that feed into the center of the world" },
  { word: "SOUTH",    hint: "Another sea — where some of the crew's darkest stories began" },
  { word: "SWORD",    hint: "The tool of those who measure strength in cuts" },
  { word: "BLADE",    hint: "What a sword becomes when it is truly mastered" },
  { word: "FLEET",    hint: "A collection of ships bound to a single flag" },
  { word: "DISCO",    hint: "He ran the auction of people and thought it was legal" },
  { word: "MOCHI",    hint: "Sticky and stretchy, wielded by the most precise fighter in his crew" },
  { word: "CANDY",    hint: "She demands it as tribute every year from those who sail her seas" },
  { word: "CLIMA",    hint: "The device she wields to make the sky work for her" },
  { word: "SHADOW",   hint: "It can be taken while you sleep and you won't notice until it's too late" },
  { word: "KIRIN",    hint: "Half dragon, half something else — ancient and terrible" },
  { word: "YOKAI",    hint: "A spirit creature from old stories, feared and revered in equal measure" },
  { word: "ANGEL",    hint: "In the sky kingdom, it was a title before it became a warning" },
  { word: "CLOUD",    hint: "In the realm above the sea, even the ground is made of this" },
  { word: "FLAME",    hint: "What some can become and others have learned to wield" },
  { word: "SLASH",    hint: "The most common language between two swordsmen" },
  { word: "BENTO",    hint: "A simple thing carried with care and eaten with meaning" },
  { word: "DADAN",    hint: "She raised boys she claimed not to care about" },
  { word: "LUFFY",    hint: "A hat can hold more weight than anyone expects" },
  { word: "KIZARU",   hint: "Fast enough to take his time" },
  { word: "MORLEY",   hint: "He shaped the underground with his hands — not metaphorically" },
  { word: "BOBBIN",   hint: "He swayed through Big Mom's halls keeping the larders full" },
  { word: "SERAPH",   hint: "Small and devastating and unlike anything that came before" },
  { word: "SHODAI",   hint: "The first of three cursed blades that bear the same family name" },
  { word: "NIDAI",    hint: "The second of three — more controlled, and rarer" },
  { word: "SHUSUI",   hint: "A black blade carried by a legend, then passed to another" },
  { word: "KENBUN",   hint: "The awareness that lets you feel intent before the blow arrives" },
  { word: "BRULEE",   hint: "She traps visitors in a world of reflections" },
  { word: "URANUS",   hint: "The third ancient weapon whose nature remains the best-kept secret" },
  { word: "KARASU",   hint: "He commands crows and rarely speaks above a whisper" },
  { word: "PIRATE",   hint: "The life they chose over every safer option" },
  { word: "MARINE",   hint: "They chase what they call justice in white coats" },
  { word: "ROOKIE",   hint: "A term for the fresh generation of the most dangerous newcomers" },
  { word: "BOUNTY",   hint: "A price on a head, posted by those who want it brought in" },
  { word: "VOYAGE",   hint: "What a ship does when a crew has a reason to sail" },

  { word: "RYUMA",    hint: "A legend so stubborn it fought on after the original was gone" },
  { word: "GECKO",    hint: "His shadow reached farther than his power" },
  { word: "VIVRE",    hint: "A paper that always knows which way to point" },
  { word: "SULONG",   hint: "The transformation that costs everything to achieve" },
  { word: "NAKAMA",   hint: "A word that means more than its translation" },

  { word: "FUUGA",    hint: "A storm technique that sweeps through opponents like wind" },
  { word: "ENIES",    hint: "Where they declared war on the world to take back one person" },
  { word: "TEKKAI",   hint: "A body made into something that barely registers a hit" },
  { word: "SHIGAN",   hint: "A finger pressed so hard it becomes something else" },

  { word: "HAJIME",   hint: "A word spoken before something begins that cannot be taken back" },
  { word: "SAMURAI",  hint: "A warrior tradition that endured when the land itself could not" },
  { word: "HAOSHOKU", hint: "The kind of power that bends others to silence without a word" },
  { word: "BUSOU",    hint: "The armament that turns a limb into something harder than steel" },
  { word: "KENBUN",   hint: "The awareness that lets you feel intent before the blow arrives" },

  { word: "TENSAI",   hint: "A word used for those whose talent makes others feel they are dreaming" },
  { word: "MUGIWARA", hint: "The name that grew from a hat into a legend" },
  { word: "JOKER",    hint: "The alias worn by a world noble with underground dealings" },
  { word: "SENSEI",   hint: "The teacher who shaped what the student would become" },
  { word: "KASHU",    hint: "A term for the singer whose voice carries across all waters" },
  { word: "TENSHO",   hint: "A sky-aimed technique that splits the air" },

  { word: "KOTSU",    hint: "The knack that cannot be taught, only discovered" },

  { word: "TORINO",   hint: "A kingdom of birds where healing knowledge was rediscovered" },
  { word: "MIHAWK",   hint: "He sits at a height others spend their lives climbing toward" },
  { word: "SHAKKY",   hint: "She retired from piracy but kept the bar and the stories" },
  { word: "KALIFA",   hint: "She poured something slippery over everything she touched" },
  { word: "GALLEY",   hint: "The shipwrights' union stood behind this name" },
  { word: "KOKORO",   hint: "She navigated the sea train and kept a secret under her hat" },
  { word: "SASAKI",   hint: "He and his ancient form fought on the wrong side for unclear reasons" },

  { word: "SANJUAN",  hint: "The giant prisoner whose size made even Impel Down feel smaller" },
  { word: "TARARAN",  hint: "A spider guardian who spun webs in the dark levels of the worst prison" },

  { word: "ABSURD",   hint: "What the world government called those who spoke the truth" },
  { word: "CASTLE",   hint: "It rose from the sea on the back of something older than anyone alive" },
  { word: "ISLAND",   hint: "Some come seeking treasure; others come not knowing what waits" },
  { word: "PALACE",   hint: "Every kingdom has one — but not every king deserves it" },
  { word: "FOREST",   hint: "Deep enough to hide a world, or lose one" },
  { word: "WINTER",   hint: "The season of the cold kingdom where medicine was forbidden" },
  { word: "SPRING",   hint: "The season of the island where the cherry blossoms fall as snow" },
  { word: "SUMMER",   hint: "The heat that bakes Alabasta — and the people living under it" },
  { word: "AUTUMN",   hint: "The falling season — when things end, something new prepares" },
  { word: "BRIDGE",   hint: "It spans the gap between what is and what must be built" },
  { word: "HARBOR",   hint: "Where ships rest between the journeys that define them" },
  { word: "DESERT",   hint: "A kingdom ruled by cruelty — until a crew arrived" },
  { word: "FROZEN",   hint: "The state of a sea made still by something that should not be still" },
  { word: "PRISON",   hint: "A place built to hold the worst — and became something else instead" },
  { word: "THRONE",   hint: "It was supposed to be empty; it was not" },
  { word: "FLOWER",   hint: "What Ohara's scholars kept in spite of everything" },
  { word: "LEGEND",   hint: "What a name becomes when enough people stop doubting it" },
  { word: "WANTED",   hint: "The word printed above a face the authorities fear" },
  { word: "ANCHOR",   hint: "What keeps a ship in place — and what some people become for others" },
  { word: "SILVER",   hint: "The color of the hair of the man who was once the king's right hand" },
  { word: "GOLDEN",   hint: "The color of a lion's ambition — or a captain's name" },
  { word: "FOSSIL",   hint: "What becomes of a world that stopped changing" },
  { word: "EMPIRE",   hint: "What some call dominion — and others call something to be dismantled" },
  { word: "BATTLE",   hint: "What settles what words cannot" },
  { word: "BANNER",   hint: "The symbol a crew carries so the world knows who answers back" },
  { word: "PRISON",   hint: "A place built to hold the worst — and became something else instead" },
  { word: "BOUNTY",   hint: "A price on a head, posted by those who want it brought in" },
  { word: "RANSOM",   hint: "What the government paid in reputation for every escape" },
  { word: "DEPTHS",   hint: "Where the sea monsters live, and the secrets the surface forgets" },
  { word: "HERALD",   hint: "One who carries a message too large to carry alone" },
  { word: "SCROLL",   hint: "What they unrolled in secret under penalty of death" },
  { word: "TREATY",   hint: "An agreement that held until one side decided it didn't" },
  { word: "ASYLUM",   hint: "What the revolutionary's base offered those with nowhere else to go" },
  { word: "MANTLE",   hint: "What a title is when you carry it long enough" },
  { word: "MIRROR",   hint: "A surface that shows the truth — or one that becomes a cage" },
  { word: "SPIDER",   hint: "The shape of something that traps and waits" },
  { word: "STATUE",   hint: "What they made of someone erased from memory — without knowing it" },
  { word: "ABYSS",    hint: "What lies below the deepest floor anyone dares to name" },
  { word: "BEAST",    hint: "What a crew becomes when it stops being afraid" },
  { word: "CROWN",    hint: "It can be taken, inherited, or burned — each means something different" },
  { word: "GHOST",    hint: "She sends them out and they return an enemy who cannot fight" },
  { word: "GIANT",    hint: "A warrior of Elbaf — where size is matched by pride" },
  { word: "TITAN",    hint: "A word for those whose scale makes ordinary conflict meaningless" },
  { word: "COMET",    hint: "What a captain looks like to the enemy — arriving and impossible to stop" },
  { word: "CHAOS",    hint: "What Dressrosa became when the truth finally surfaced" },
  { word: "NOBLE",    hint: "A title used by those who dress well and live poorly by other measures" },
  { word: "AISLE",    hint: "The path between two sides — that some are never allowed to walk" },
  { word: "EXILE",    hint: "What happens to the ones who know too much" },
  { word: "GRIEF",    hint: "The weight that turns a goal into something unshakeable" },
  { word: "TRUCE",    hint: "A pause that neither side trusts — but both need" },
  { word: "GLORY",    hint: "What pirates shout about; what marines deny wanting" },
  { word: "SWEAR",    hint: "What makes a promise something more than words" },
  { word: "CREST",    hint: "The emblem that marks allegiance above all else" },
  { word: "CHAOS",    hint: "What Dressrosa became when the truth finally surfaced" },
  { word: "FLAME",    hint: "What some can become and others have learned to wield" },
  { word: "SPARK",    hint: "What started the age of pirates — a single event, a single laugh" },
  { word: "STORM",    hint: "What a powerful Logia can become — and what some crews survive" },
  { word: "STEEL",    hint: "The material of walls, cages, ships, and some wills" },
  { word: "OCEAN",    hint: "The place that takes from those with its power and gives to others" },
  { word: "TRIBE",    hint: "A group bound not by law but by something older" },
  { word: "BLOOD",    hint: "What some call the only bond that matters — and others prove isn't" },
  { word: "FORGE",    hint: "Where the greatest blades are made — and what suffering sometimes does" },
  { word: "VAULT",    hint: "What they locked the truth inside — and what the scholars opened" },
  { word: "WRATH",    hint: "What a nation felt when the flag was burned" },
  { word: "EMBER",    hint: "What remains when a fire dies — and refuses to go out completely" },
  { word: "SPINE",    hint: "What separates those who fight from those who fall" },
  { word: "RIDGE",    hint: "The edge between two worlds — like the top of a waterfall" },
  { word: "DREAD",    hint: "What the World Government feels when a certain name is spoken" },
  { word: "PRANK",    hint: "What some call the trick that bought the crew enough time to escape" },
  { word: "TORCH",    hint: "What the revolution keeps lit even when everything else goes dark" },
  { word: "SIREN",    hint: "A sound that calls ships toward something they cannot resist" },
  { word: "RELIC",    hint: "Something old enough that its purpose has been half-forgotten" },
  { word: "GLYPH",    hint: "Carved in stone to outlast those who carved it" },
  { word: "ROGUE",    hint: "What the World Government calls anyone who defies it" },
  { word: "EXILE",    hint: "What happens to the ones who know too much" },
  { word: "BASIN",    hint: "The area outside the Sabaody mangroves where the powerful gather" },
  { word: "CREED",    hint: "What a crew follows when they have no map" },
  { word: "SAINT",    hint: "A title that means nothing about character and everything about birth" },
  { word: "TYRANT",   hint: "What the world called a king who was actually innocent" },
  { word: "MASTER",   hint: "What a weapon becomes when someone finally learns to carry it" },
  { word: "CANOPY",   hint: "The roof of the forest — or the mangrove that became a city" },
  { word: "RAPIDS",   hint: "The waters at Reverse Mountain — where the world's greatest sea begins" },
  { word: "TUNDRA",   hint: "The frozen terrain of the kingdom where medicine was outlawed" },
  { word: "SPIRAL",   hint: "The shape of the route into the most dangerous ocean" },
  { word: "CRATER",   hint: "What remains when something powerful hits the ground" },
  { word: "DAGGER",   hint: "The weapon of those who fight at the distance trust allows" },
  { word: "CANVAS",   hint: "What maps are drawn on — and what a navigator stakes her life on" },
  { word: "SIGNAL",   hint: "What the Vivre Card sends when the person it belongs to still lives" },
  { word: "FAMINE",   hint: "What a land endures when its ruler decides to hoard" },
  { word: "RANSOM",   hint: "What the government paid in reputation for every escape" },
  { word: "TYRANT",   hint: "What the world called a king who was actually innocent" },
  { word: "TREMOR",   hint: "The power that shook the world and the one who held it" },
  { word: "AMBUSH",   hint: "The strategy used by those who cannot win a straight fight" },
  { word: "CIPHER",   hint: "A numbered group that operates where the government won't admit to" },
  { word: "BASALT",   hint: "The dark rock that forms under fire — what some islands are made of" },
  { word: "GROTTO",   hint: "A hidden space beneath the surface that few are meant to find" },
  { word: "PARDON",   hint: "What a warlord received in exchange for service — until the deal was broken" },
  { word: "VESSEL",   hint: "A ship, a body, or a container — depending on who holds the power" },
  { word: "WALNUT",   hint: "What some islands are to those who break them open to see inside" },
  { word: "FALLOW",   hint: "Land left unused — or a power left undeveloped until a crisis" },
  { word: "MAGNET",   hint: "The force that pulls iron — and what some leaders are to followers" },
  { word: "RIPPLE",   hint: "What a small truth creates when dropped into a large silence" },
  { word: "BOUNTY",   hint: "A price on a head, posted by those who want it brought in" },
  { word: "PARLEY",   hint: "The old agreement that certain pirates honor and others ignore" },
  { word: "HAVOC",    hint: "What a certain Straw Hat leaves behind — unintentionally, mostly" },
  { word: "LANTERN",  hint: "What guides the way when the sky provides nothing useful" },
  { word: "MASQUE",   hint: "A disguise worn at a party — or for years, without a party" },
  { word: "BARREN",   hint: "The land after a battle that wasn't won by anyone" },
  { word: "MANTLE",   hint: "What a title is when you carry it long enough" },
  { word: "RAPIDS",   hint: "The waters at the entrance to the most dangerous ocean" },
  { word: "FLARE",    hint: "A burst that signals something has changed — or is about to" },
  { word: "STRIKE",   hint: "What settles what words cannot" },
  { word: "DECREE",   hint: "A rule handed down by those who believe their words are law" },
  { word: "SHRINE",   hint: "A place that holds something too important to keep among the living" },
  { word: "ANCHOR",   hint: "What keeps a ship in place — and what some people become for others" },
  { word: "BREACH",   hint: "The gap in a wall — or the moment a secret escapes" },
  { word: "CIPHER",   hint: "A numbered group that operates where the government won't admit to" },
  { word: "SENTRY",   hint: "A guard who may or may not know what they're really protecting" },
  { word: "SUNDER",   hint: "What the tremor fruit does to the fabric of the world" },
  { word: "CURSED",   hint: "The blades that resist their own bearers — and the fruits that take the sea" },
  { word: "HERALD",   hint: "One who carries a message too large to carry alone" },
  { word: "DEBRIS",   hint: "What a very large battle leaves behind for those who come after" },
  { word: "INFAMY",   hint: "What a bounty poster turns into — if the number is high enough" },
  { word: "DRIFTS",   hint: "What a ship does when no one is steering — and what some lives do too" },
  { word: "PRISON",   hint: "A place built to hold the worst — and became something else instead" },
  { word: "THRONE",   hint: "It was supposed to be empty; it was not" },
  { word: "NOMADS",   hint: "Those who sail without an island to return to — by choice or by loss" },
  { word: "LEGACY",   hint: "What a captain leaves behind for those who carry the flag forward" },
  { word: "FAMINE",   hint: "What a land endures when its ruler decides to hoard" },
  { word: "RAVAGE",   hint: "What a powerful crew does to an enemy base when there's nothing left to lose" },
  { word: "INSTINCT", hint: "What Haki is, before it becomes something that can be controlled" },
  { word: "TURMOIL",  hint: "The state of a sea that has lost its balance of power" },
  { word: "WARDEN",   hint: "The one who keeps the doors shut — and must be overcome" },
  { word: "ASCEND",   hint: "What every ambitious pirate swears to do before the end" },
  { word: "SORROW",   hint: "What a song about sailing on a moonlit sea always carries" },
  { word: "SACRED",   hint: "What the stone tablet is, in a world that forbids its reading" },
  { word: "EMBLEM",   hint: "The mark that tells the world what a crew believes in" },
  { word: "VOYAGE",   hint: "What a ship does when a crew has a reason to sail" },
  { word: "FABLED",   hint: "What an island becomes when enough years pass without proof" },
  { word: "CURSED",   hint: "The blades that resist their own bearers — and the fruits that take the sea" },

  { word: "ABYSS",    hint: "What lies below the deepest floor anyone dares to name" },
  { word: "ORACLE",   hint: "The knowledge some spend lifetimes seeking without finding" },
  { word: "SUMMIT",   hint: "The highest point — where the wars that change eras are fought" },
  { word: "CIPHER",   hint: "A numbered group that operates where the government won't admit to" },
  { word: "HERALD",   hint: "One who carries a message too large to carry alone" },
  { word: "STIGMA",   hint: "The mark that outlaws carry whether they want to or not" },
  { word: "TYRANT",   hint: "What the world called a king who was actually innocent" },
  { word: "TROPHY",   hint: "What a warlord's head might be, to those who want what they protected" },
  { word: "TEMPEST",  hint: "What a sky-island storm looks like from below" },
  { word: "MANTLE",   hint: "What a title is when you carry it long enough" },

  { word: "FERVOR",   hint: "The heat behind a belief that doesn't cool when the fight gets hard" },
  { word: "GALLOP",   hint: "The speed a land animal reaches that a ship captain envies" },
  { word: "HAVOC",    hint: "What a certain Straw Hat leaves behind" },
  { word: "JUNKEN",   hint: "A game that decides who eats and who doesn't on certain pirate ships" },

  { word: "OKAMA",    hint: "A haven carved into the bottom of the world's worst prison" },
  { word: "IMPEL",    hint: "The prison from which no one has ever escaped — until they did" },
  { word: "PONEG",    hint: "Ancient stone that holds what governments tried to bury" },
  { word: "LOGUE",    hint: "The town at the entrance and the exit of the most dangerous sea" },
  { word: "SYRUP",    hint: "A quiet island where a boy told stories no one believed" },
  { word: "SHELLS",   hint: "The first town a certain crew had to survive" },
  { word: "FOOSHA",   hint: "A village small enough to know everyone's name" },
  { word: "RAFTEL",   hint: "The end of the road — and also the beginning" },
  { word: "TOTTO",    hint: "The realm where only one woman's word is law" },
  { word: "RYUGU",    hint: "The palace beneath the waves where the sea royals reside" },

  { word: "NANBU",    hint: "A direction in the sea that means different things on different maps" },
  { word: "SEAWAY",   hint: "The path a navigator charts between danger and open water" },
  { word: "FOGHORN",  hint: "A sound that warns ships of what they cannot see yet" },
  { word: "KRAKEN",   hint: "A creature of legend large enough to sink a ship in one motion" },
  { word: "SERPENT",  hint: "What the sea kings look like to those who see them for the first time" },
  { word: "SCYTHE",   hint: "The weapon of someone who harvests what others planted in fear" },
  { word: "QUARRY",   hint: "The target that a crew pursues across half the world" },
  { word: "PURSUE",   hint: "What marines do — and what some pirates never stop doing either" },
  { word: "SIGNAL",   hint: "What the Vivre Card sends when the person it belongs to still lives" },
  { word: "PATRON",   hint: "The one who funds what they cannot personally carry out" },
  { word: "RATION",   hint: "What you eat when the sea lasts longer than the food you brought" },
  { word: "ESCAPE",   hint: "What Impel Down's designers insisted was impossible" },
  { word: "TREATY",   hint: "An agreement that held until one side decided it didn't" },
  { word: "ASYLUM",   hint: "What the revolutionary's base offered those with nowhere else to go" },
  { word: "WRAITH",   hint: "What a shadow-taking villain becomes in legend" },
  { word: "HUNGER",   hint: "What drives more than one villain who began with nothing" },
  { word: "REVIVE",   hint: "What a phoenix does — and what hope does in the right hands" },
  { word: "MORTAL",   hint: "What none of the most powerful seem to be — until they are" },
  { word: "LANCER",   hint: "A warrior who fights at range with something long and deadly" },
  { word: "MUTINY",   hint: "What happens when a crew loses faith in the one holding the wheel" },
  { word: "SORROW",   hint: "What a song about sailing on a moonlit sea always carries" },
  { word: "PATROL",   hint: "What marines call the routine that sometimes ends unexpectedly" },
  { word: "RITUAL",   hint: "A practice repeated so long it becomes the only way to do something" },
  { word: "ARDENT",   hint: "The quality of devotion that shows up whether or not it's welcome" },
  { word: "DECREE",   hint: "A rule handed down by those who believe their words are law" },
  { word: "BRAVERY",  hint: "What stands between a crew and the thing that should be impossible" },
  { word: "WARDEN",   hint: "The one who keeps the doors shut — and must be overcome" },
  { word: "HARBOR",   hint: "Where ships rest between the journeys that define them" },
  { word: "GALLEON",  hint: "A class of ship large enough to hold a whole crew's ambition" },
  { word: "DAGGER",   hint: "The weapon of those who fight at the distance trust allows" },
  { word: "GROTTO",   hint: "A hidden space beneath the surface that few are meant to find" },
  { word: "TURRET",   hint: "What Franky's ship uses when diplomacy has failed" },
  { word: "VOLLEY",   hint: "What Usopp fires — one after another — hoping one connects" },
  { word: "CANOPY",   hint: "The roof of the forest — or the mangrove that became a city" },
  { word: "TREMOR",   hint: "The power that shook the world and the one who held it" },
  { word: "SHROUD",   hint: "What a dead man's tale becomes after enough generations" },
  { word: "SENTRY",   hint: "A guard who may or may not know what they're really protecting" },
  { word: "BREEZE",   hint: "What fills the sails — and what some moments feel like before the storm" },
  { word: "MAGNET",   hint: "The force that pulls iron — and what some captains are to their crews" },
  { word: "RIPPLE",   hint: "What a small truth creates when dropped into a large silence" },
  { word: "ORACLE",   hint: "The knowledge some spend lifetimes seeking without finding" },
  { word: "PARDON",   hint: "What a warlord received in exchange for service — until the deal broke" },
  { word: "SCROLL",   hint: "What they unrolled in secret under penalty of death" },
  { word: "DEPTHS",   hint: "Where the sea monsters live, and the secrets the surface forgets" },
  { word: "BASALT",   hint: "The dark rock that forms under fire — what some islands are made of" },
  { word: "WALRUS",   hint: "A creature large enough to anchor itself to the sea bed and ignore ships" },
  { word: "ORDEAL",   hint: "A test that the sky island uses to punish those who don't belong" },
  { word: "DEBRIS",   hint: "What a very large battle leaves behind for those who come after" },
  { word: "SHRIEK",   hint: "What the enemy hears when the hollow ghosts arrive" },
  { word: "PARLEY",   hint: "The old agreement that certain pirates honor and others ignore" },
  { word: "TYRANT",   hint: "What the world called a king who was actually innocent" },
  { word: "LEGACY",   hint: "What a captain leaves behind for those who carry the flag forward" },
  { word: "RAVINE",   hint: "A cut in the earth deep enough to remind you how small ships are" },
  { word: "STIGMA",   hint: "The mark that outlaws carry whether they want to or not" },
  { word: "FERVOR",   hint: "The heat behind a belief that doesn't cool when the fight gets hard" },
  { word: "ARDENT",   hint: "The quality of devotion that shows up whether or not it's welcome" },
  { word: "SUMMIT",   hint: "The highest point — where the wars that change eras are fought" },
  { word: "SACRED",   hint: "What the stone tablet is, in a world that forbids its reading" },
  { word: "EMBLEM",   hint: "The mark that tells the world what a crew believes in" },
  { word: "FABLED",   hint: "What an island becomes when enough years pass without proof" },
  { word: "INFAMY",   hint: "What a bounty poster turns into — if the number is high enough" },
  { word: "ASCEND",   hint: "What every ambitious pirate swears to do before the end" },
  { word: "SUNDER",   hint: "What the tremor fruit does to the fabric of the world" },
  { word: "BREACH",   hint: "The gap in a wall — or the moment a secret escapes" },
  { word: "TROPHY",   hint: "What a warlord's head might be, to those who want what they protected" },
  { word: "NOMADS",   hint: "Those who sail without an island to return to — by choice or by loss" },
  { word: "REVIVE",   hint: "What a phoenix does — and what hope does in the right hands" },
  { word: "MORTAL",   hint: "What none of the most powerful seem to be — until they are" },
  { word: "MUTINY",   hint: "What happens when a crew loses faith in the one holding the wheel" },
  { word: "RITUAL",   hint: "A practice repeated so long it becomes the only way to do something" },
  { word: "PATRON",   hint: "The one who funds what they cannot personally carry out" },
  { word: "GALLEON",  hint: "A class of ship large enough to hold a whole crew's ambition" },
  { word: "SHROUD",   hint: "What a dead man's tale becomes after enough generations" },
  { word: "BREEZE",   hint: "What fills the sails — and what some moments feel like before the storm" },
  { word: "VOLLEY",   hint: "What certain long-range fighters send — one after another" },
  { word: "TURRET",   hint: "What the Sunny uses when diplomacy has failed" },
  { word: "HUNGER",   hint: "What drives more than one villain who began with nothing" },
  { word: "WRAITH",   hint: "What a shadow-taking villain becomes in legend" },
  { word: "LANCER",   hint: "A warrior who fights at range with something long and deadly" },
  { word: "ORDEAL",   hint: "A test that the sky island uses to punish those who don't belong" },
  { word: "WALRUS",   hint: "A creature large enough to anchor itself to the sea and ignore ships" },
  { word: "RAVINE",   hint: "A cut in the earth deep enough to remind you how small ships are" },
  { word: "SHRIEK",   hint: "What the enemy hears when certain hollow arrivals drain the will to fight" },
  { word: "ESCAPE",   hint: "What Impel Down's designers insisted was impossible" },
  { word: "REVERIE",  hint: "The world's rulers gather here and the wrong things get decided" },
  { word: "HUNGER",   hint: "What drives more than one villain who began with nothing" },
  { word: "FLARE",    hint: "A burst that signals something has changed — or is about to" },
  { word: "EMBER",    hint: "What remains when a fire dies — and refuses to go out completely" },
  { word: "WRATH",    hint: "What a nation felt when the flag was burned and no one answered" },
  { word: "TORCH",    hint: "What the revolution keeps lit even when everything else goes dark" },
  { word: "CREED",    hint: "What a crew follows when they have no map" },
  { word: "SAINT",    hint: "A title that means nothing about character and everything about birth" },
  { word: "RELIC",    hint: "Something old enough that its purpose has been half-forgotten" },
  { word: "ROGUE",    hint: "What the World Government calls anyone who truly defies it" },
  { word: "GLYPH",    hint: "Carved in stone to outlast those who carved it" },
  { word: "BLOOD",    hint: "What some call the only bond that matters — and others prove isn't" },
  { word: "TRIBE",    hint: "A group bound not by law but by something older" },
  { word: "FORGE",    hint: "Where the greatest blades are made — and what suffering sometimes does" },
  { word: "VAULT",    hint: "What they locked the truth inside — and what the scholars opened" },

  { word: "CROWN",    hint: "It can be taken, inherited, or burned — each means something different" },
  { word: "TITAN",    hint: "A word for those whose scale makes ordinary conflict meaningless" },
  { word: "COMET",    hint: "What a captain looks like to the enemy — arriving and impossible to stop" },
  { word: "GHOST",    hint: "She sends them out and they return an enemy who cannot fight" },
  { word: "NOBLE",    hint: "A title used by those who dress well and live poorly by other measures" },
  { word: "CHAOS",    hint: "What a kingdom becomes when the truth finally surfaces" },
  { word: "GLORY",    hint: "What pirates shout about; what marines deny wanting" },
  { word: "SWEAR",    hint: "What makes a promise something more than words" },
  { word: "CREST",    hint: "The emblem that marks allegiance above all else" },
  { word: "SPARK",    hint: "What started the age of pirates — a single event, a single laugh" },
  { word: "STEEL",    hint: "The material of walls, cages, ships, and some wills" },
  { word: "OCEAN",    hint: "The place that takes from those with its power and gives to others" },
  { word: "WINTER",   hint: "The season of the cold kingdom where medicine was forbidden" },
  { word: "SUMMER",   hint: "The heat that bakes a desert kingdom — and the people living under it" },
  { word: "DESERT",   hint: "A kingdom ruled by cruelty — until a crew arrived" },
  { word: "BRIDGE",   hint: "It spans the gap between what is and what must be built" },
  { word: "WANTED",   hint: "The word printed above a face the authorities fear" },
  { word: "BANNER",   hint: "The symbol a crew carries so the world knows who answers back" },
  { word: "SCROLL",   hint: "What they unrolled in secret under penalty of death" },
  { word: "CANVAS",   hint: "What maps are drawn on — and what a navigator stakes her life on" },
  { word: "FLOWER",   hint: "What Ohara's scholars kept in spite of everything" },
  { word: "FOSSIL",   hint: "What becomes of a world that stopped changing" },
  { word: "EMPIRE",   hint: "What some call dominion — and others call something to be dismantled" },
  { word: "BATTLE",   hint: "What settles what words cannot" },
  { word: "DREAD",    hint: "What the World Government feels when a certain name is spoken" },
  { word: "SIREN",    hint: "A sound that calls ships toward something they cannot resist" },
  { word: "BASIN",    hint: "The area outside the Sabaody mangroves where the powerful gather" },
  { word: "TUNDRA",   hint: "The frozen terrain of the kingdom where medicine was outlawed" },
  { word: "SPIRAL",   hint: "The shape of the route into the most dangerous ocean" },
  { word: "CRATER",   hint: "What remains when something powerful hits the ground" },
  { word: "SIGNAL",   hint: "What a paper that belongs to someone shows when they still live" },
  { word: "FROZEN",   hint: "The state of a sea made still by something that should not be still" },
  { word: "PATROL",   hint: "What marines call the routine that sometimes ends unexpectedly" },

  { word: "AMBLE",    hint: "The unhurried pace of someone who knows no one can catch them" },
  { word: "BRINE",    hint: "The salt of the sea that gets into everything — including old wounds" },
  { word: "LEDGE",    hint: "The edge a navigator walks when she's choosing between two wrong routes" },
  { word: "DOUSE",    hint: "What rain does to fire — and what the sea does to devil fruit power" },
  { word: "RELIC",    hint: "Something old enough that its purpose has been half-forgotten" },
  { word: "GLOOM",    hint: "The atmosphere of a ship that sails through a triangle no one maps" },
  { word: "GRAIL",    hint: "What the One Piece is to some — a dream more than an object" },
  { word: "REIGN",    hint: "What a warlord does to their territory while no one is watching" },
  { word: "SCORN",    hint: "What the strong feel for the weak — until the weak prove otherwise" },
  { word: "HAVOC",    hint: "What a certain Straw Hat leaves behind" },
  { word: "PLUME",    hint: "What a volcano leaves in the sky — or what Ace once was" },
  { word: "SHARD",    hint: "What a shattered poneglyph becomes — still holding its secret" },
  { word: "ROOST",    hint: "Where the birds of prey return after — a pirate crew's favorite harbor" },
  { word: "FERAL",    hint: "The state of power before it is disciplined into something useful" },
  { word: "PROWL",    hint: "What a sea king does in the calm belt — and what CP agents do in ports" },
  { word: "WRECK",    hint: "What the previous great ship became — and what the crew grieved" },
  { word: "PLEAD",    hint: "What characters in chains do — and sometimes it actually works" },
  { word: "GLEAM",    hint: "What Mihawk's blade does before it moves, if you're lucky enough to see it" },
  { word: "TROVE",    hint: "What the end of the Grand Line supposedly holds" },
  { word: "SQUALL",   hint: "What the weather on the Grand Line becomes without warning" },
  { word: "GEYSER",   hint: "What Reverse Mountain is — water flowing up when it shouldn't" },
  { word: "FATHOM",   hint: "The depth of the sea — and the depth of the secrets it keeps" },
  { word: "TIRADE",   hint: "What Nami delivers to anyone who damages the ship without permission" },
  { word: "CIPHER",   hint: "A numbered group that operates where the government won't admit to" },
  { word: "FERRET",   hint: "What a good archaeologist does — uncovers what is meant to stay buried" },
  { word: "CORDON",   hint: "The line the marines draw around an island when things go wrong" },
  { word: "TUMULT",   hint: "The state of the world after the Marineford war" },
  { word: "CHORUS",   hint: "What Binks' Sake becomes when everyone who knows it sings together" },
  { word: "GAMBIT",   hint: "The risk taken early in the battle that determines the rest" },
  { word: "FORAY",    hint: "A venture into enemy territory without a plan for getting back" },
  { word: "LAMENT",   hint: "What certain songs carry — about the sea and those it keeps" },
  { word: "ACCORD",   hint: "What the Reverie tries to reach and usually doesn't" },
  { word: "LEGEND",   hint: "What a name becomes when enough people stop doubting it" },
  { word: "FRACAS",   hint: "The chaos that erupts the moment a certain rubber captain enters a party" },
  { word: "BRAWL",    hint: "What happens before anyone decides who's strongest" },
  { word: "PLUME",    hint: "What a volcano leaves in the sky — or what fire leaves behind" },
  { word: "RUBBLE",   hint: "What remains of the throne room after the crew leaves Dressrosa" },
  { word: "TALON",    hint: "The grip of something predatory — like certain devil fruit transformations" },
  { word: "DIRGE",    hint: "A slow song for those who fell and weren't supposed to" },
  { word: "GLEAM",    hint: "What Mihawk's blade does before it moves, if you're lucky enough to see it" },
  { word: "BASTION",  hint: "What every warlord's island becomes — and eventually falls from" },
  { word: "DECREE",   hint: "A rule handed down by those who believe their words are law" },
  { word: "SHRINE",   hint: "A place that holds something too important to keep among the living" },
];

// ── Filter & Deduplicate (5–6 letters only) ────────────────────────────────
const VALID_WORDS = (() => {
  const seen = new Set();
  return WORDS.filter(({ word }) => {
    const clean = word.replace(/\s/g, "").toUpperCase();
    if (!/^[A-Z]+$/.test(clean)) return false;
    if (clean.length < 5 || clean.length > 6) return false;
    if (seen.has(clean)) return false;
    seen.add(clean);
    return true;
  }).map(w => ({ word: w.word.replace(/\s/g, "").toUpperCase(), hint: w.hint }));
})();

// ── Daily Word Selection ────────────────────────────────────────────────────
const EPOCH       = new Date("2025-01-01T00:00:00Z").getTime();
const DAY_INDEX   = Math.floor((Date.now() - EPOCH) / 86400000);
const TODAY_ENTRY = VALID_WORDS[DAY_INDEX % VALID_WORDS.length];
const TARGET      = TODAY_ENTRY.word;
const WORD_LEN    = TARGET.length;
const MAX_GUESSES = 6;

// ── Game State ──────────────────────────────────────────────────────────────
const STATE_KEY = `opd_state_${DAY_INDEX}`;
const STATS_KEY = "opd_stats";

let guesses      = [];   // committed guesses
let current      = "";   // letters typed in current row
let gameOver     = false;
let busy         = false; // true while reveal animation is running

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STATE_KEY));
    if (s && Array.isArray(s.guesses)) { guesses = s.guesses; gameOver = s.gameOver || false; }
  } catch {}
}
function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify({ guesses, gameOver }));
}

function loadStats() {
  try {
    const s = JSON.parse(localStorage.getItem(STATS_KEY));
    if (s && Array.isArray(s.distribution)) return s;
  } catch {}
  return { played: 0, wins: 0, streak: 0, maxStreak: 0, lastWinDay: -1, distribution: [0,0,0,0,0,0] };
}
function saveStats(s) { localStorage.setItem(STATS_KEY, JSON.stringify(s)); }

// ── Feedback Algorithm ──────────────────────────────────────────────────────
function computeFeedback(guess, target) {
  const result   = Array(target.length).fill("gray");
  const tLetters = target.split("");
  const gLetters = guess.split("");
  gLetters.forEach((l, i) => {
    if (l === tLetters[i]) { result[i] = "green"; tLetters[i] = ""; gLetters[i] = ""; }
  });
  gLetters.forEach((l, i) => {
    if (!l) return;
    const idx = tLetters.indexOf(l);
    if (idx !== -1) { result[i] = "yellow"; tLetters[idx] = ""; }
  });
  return result;
}

// ── DOM Helpers ─────────────────────────────────────────────────────────────
const boardEl  = document.getElementById("board");
const kbEl     = document.getElementById("keyboard");
const msgEl    = document.getElementById("message-bar");
const hintEl   = document.getElementById("hint-bar");
const shareBtn = document.getElementById("btn-share");

function getTile(row, col) {
  return boardEl.querySelector(`[data-row="${row}"][data-col="${col}"]`);
}

function setTileState(row, col, letter, color) {
  const t = getTile(row, col);
  if (!t) return;
  t.textContent  = letter || "";
  t.className    = "tile" + (color ? " " + color : "") + (letter && !color ? " filled" : "");
}

function getKeyBtn(key) {
  return kbEl.querySelector(`[data-key="${key}"]`);
}

// ── Build Board ─────────────────────────────────────────────────────────────
function buildBoard() {
  boardEl.style.gridTemplateColumns = `repeat(${WORD_LEN}, var(--tile-size))`;
  boardEl.innerHTML = "";
  for (let r = 0; r < MAX_GUESSES; r++) {
    for (let c = 0; c < WORD_LEN; c++) {
      const t = document.createElement("div");
      t.className = "tile";
      t.dataset.row = r;
      t.dataset.col = c;
      boardEl.appendChild(t);
    }
  }
}

// ── Build Keyboard ──────────────────────────────────────────────────────────
const KB_ROWS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["ENTER","Z","X","C","V","B","N","M","⌫"],
];

function buildKeyboard() {
  kbEl.innerHTML = "";
  KB_ROWS.forEach(row => {
    const rowEl = document.createElement("div");
    rowEl.className = "kb-row";
    row.forEach(key => {
      const btn = document.createElement("button");
      btn.className = "key" + (key === "ENTER" || key === "⌫" ? " wide" : "");
      btn.textContent = key;
      btn.dataset.key = key;
      // Use pointerdown for instant response (no click delay)
      btn.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        handleKey(key);
      });
      rowEl.appendChild(btn);
    });
    kbEl.appendChild(rowEl);
  });
}

// ── Key Colors ──────────────────────────────────────────────────────────────
const keyColorMap = {};
const COLOR_PRIORITY = { green: 3, yellow: 2, gray: 1 };

function applyKeyColor(letter, color) {
  if (!keyColorMap[letter] || COLOR_PRIORITY[color] > COLOR_PRIORITY[keyColorMap[letter]]) {
    keyColorMap[letter] = color;
    const btn = getKeyBtn(letter);
    if (btn) { btn.classList.remove("green","yellow","gray"); btn.classList.add(color); }
  }
}

// ── Message Bar ─────────────────────────────────────────────────────────────
let msgTimer = null;
function showMessage(text, isError = false, ms = 2200) {
  clearTimeout(msgTimer);
  msgEl.textContent = text;
  msgEl.className = "message-bar" + (isError ? " error" : "");
  msgEl.classList.remove("hidden");
  if (ms > 0) msgTimer = setTimeout(() => msgEl.classList.add("hidden"), ms);
}

// ── Row Animations ──────────────────────────────────────────────────────────
function shakeRow(row) {
  for (let c = 0; c < WORD_LEN; c++) {
    const t = getTile(row, c);
    t.classList.add("shake");
    t.addEventListener("animationend", () => t.classList.remove("shake"), { once: true });
  }
}

function bounceRow(row) {
  for (let c = 0; c < WORD_LEN; c++) {
    setTimeout(() => {
      const t = getTile(row, c);
      t.classList.add("bounce");
      t.addEventListener("animationend", () => t.classList.remove("bounce"), { once: true });
    }, c * 80);
  }
}

// ── Handle Key ──────────────────────────────────────────────────────────────
function handleKey(key) {
  if (gameOver || busy) return;

  if (key === "⌫") {
    if (!current.length) return;
    current = current.slice(0, -1);
    setTileState(guesses.length, current.length, "", null);
    return;
  }

  if (key === "ENTER") {
    if (current.length < WORD_LEN) {
      showMessage(`Need ${WORD_LEN} letters!`, true);
      shakeRow(guesses.length);
      return;
    }

    const guess    = current;
    const rowIdx   = guesses.length;
    const feedback = computeFeedback(guess, TARGET);

    current = "";
    guesses.push(guess);
    busy = true;

    // Flip tiles one by one with color reveal
    feedback.forEach((color, ci) => {
      setTimeout(() => {
        const t = getTile(rowIdx, ci);
        t.classList.add("flip");
        // reveal color halfway through flip
        setTimeout(() => {
          t.classList.remove("filled", "flip");
          t.classList.add(color);
          // Update key color as each tile resolves
          applyKeyColor(guess[ci], color);
        }, 200);
      }, ci * 380);
    });

    const totalDelay = WORD_LEN * 380 + 250;
    setTimeout(() => {
      busy = false;
      saveState();

      const won = feedback.every(f => f === "green");
      if (won) {
        gameOver = true;
        saveState();
        const msgs = ["Incredible!","Flawless!","Outstanding!","Great job!","Not bad!","Phew!"];
        showMessage(msgs[rowIdx] || "You got it!");
        bounceRow(rowIdx);
        const stats = loadStats();
        stats.played++; stats.wins++; stats.distribution[rowIdx]++;
        stats.streak = (stats.lastWinDay === DAY_INDEX - 1) ? stats.streak + 1 : 1;
        stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
        stats.lastWinDay = DAY_INDEX;
        saveStats(stats);
        setTimeout(showStatsModal, 2000);
      } else if (guesses.length >= MAX_GUESSES) {
        gameOver = true;
        saveState();
        showMessage(`The word was ${TARGET}`, false, 4500);
        const stats = loadStats(); stats.played++; stats.streak = 0;
        saveStats(stats);
        setTimeout(showStatsModal, 2500);
      }
    }, totalDelay);

    return;
  }

  if (/^[A-Za-z]$/.test(key) && current.length < WORD_LEN) {
    const letter = key.toUpperCase();
    current += letter;
    const col = current.length - 1;
    const t   = getTile(guesses.length, col);
    t.textContent = letter;
    t.classList.add("filled");
  }
}

// ── Physical Keyboard ───────────────────────────────────────────────────────
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.altKey || e.metaKey || e.repeat) return;
  if      (e.key === "Enter")     handleKey("ENTER");
  else if (e.key === "Backspace") handleKey("⌫");
  else if (/^[a-zA-Z]$/.test(e.key)) handleKey(e.key);
});

// ── Stats Modal ─────────────────────────────────────────────────────────────
function showStatsModal() {
  const stats = loadStats();
  document.getElementById("stat-played").textContent    = stats.played;
  document.getElementById("stat-winpct").textContent    = stats.played ? Math.round(stats.wins / stats.played * 100) : 0;
  document.getElementById("stat-streak").textContent    = stats.streak;
  document.getElementById("stat-maxstreak").textContent = stats.maxStreak;

  const distEl = document.getElementById("distribution");
  distEl.innerHTML = "";
  const max = Math.max(...stats.distribution, 1);
  stats.distribution.forEach((count, i) => {
    const isCur = gameOver && guesses.length === i + 1;
    const pct   = Math.max(8, Math.round((count / max) * 100));
    distEl.innerHTML += `
      <div class="dist-row">
        <span class="dist-num">${i + 1}</span>
        <div class="dist-bar-wrap">
          <div class="dist-bar${isCur ? " current" : ""}" style="width:${pct}%">${count}</div>
        </div>
      </div>`;
  });

  if (gameOver) shareBtn.classList.remove("hidden");
  document.getElementById("modal-stats").classList.remove("hidden");
}

// ── Share ────────────────────────────────────────────────────────────────────
shareBtn.addEventListener("click", () => {
  const won   = guesses.some(g => g === TARGET);
  const line  = won ? `${guesses.length}/${MAX_GUESSES}` : `X/${MAX_GUESSES}`;
  const grid  = guesses.map(g =>
    computeFeedback(g, TARGET).map(c => c === "green" ? "🟩" : c === "yellow" ? "🟨" : "⬛").join("")
  ).join("\n");
  const text  = `OnePieceDaily #${DAY_INDEX + 1} — ${line}\n${grid}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showMessage("Copied! ⚓"));
  } else {
    prompt("Copy your result:", text);
  }
});

// ── Modals ────────────────────────────────────────────────────────────────────
document.getElementById("btn-how").addEventListener("click", () =>
  document.getElementById("modal-how").classList.remove("hidden")
);
document.getElementById("btn-stats").addEventListener("click", showStatsModal);

document.querySelectorAll(".modal-close").forEach(btn =>
  btn.addEventListener("click", () =>
    document.getElementById(btn.dataset.modal).classList.add("hidden")
  )
);
document.querySelectorAll(".modal").forEach(modal =>
  modal.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); })
);

// ── Restore Previous Session ─────────────────────────────────────────────────
function restoreSession() {
  guesses.forEach((guess, r) => {
    const feedback = computeFeedback(guess, TARGET);
    guess.split("").forEach((letter, c) => {
      const t = getTile(r, c);
      t.textContent = letter;
      t.classList.add(feedback[c]);
    });
    feedback.forEach((color, c) => applyKeyColor(guess[c], color));
  });
  if (gameOver) setTimeout(showStatsModal, 600);
}

// ── Init ──────────────────────────────────────────────────────────────────────
hintEl.textContent = TODAY_ENTRY.hint;

document.getElementById("footer-date").textContent = new Date().toLocaleDateString("en-US", {
  weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
});

loadState();
buildBoard();
buildKeyboard();
restoreSession();
