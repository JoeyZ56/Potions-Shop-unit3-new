require('dotenv').config();
require('./database');

const { src } = require('gulp');
const Category = require('../models/category');
const Item = require('../models/item');

(async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: 'Health Potions', sortOrder: 10 },
		{ name: 'Mana Potions', sortOrder: 20 },
		{ name: 'Stamina Potions', sortOrder: 30 },
		{ name: 'Love Potions', sortOrder: 40 },
		{ name: 'Elements Potion', sortOrder: 50 },
		{ name: 'Enhancement Potions', sortOrder: 60 },
		{ name: 'Exotic Potions', sortOrder: 70 }
	]);

	await Item.deleteMany({});
	const items = await Item.create([
		{
			name: 'XL Health Potion',
			emoji: '❤️‍🩹❤️‍🩹❤️‍🩹',
			category: categories[0],
			price: 10,
			description: '100% Healing, Hint of Strawberry'
		},
		{
			name: 'SM Health Potion',
			emoji: '❤️‍🩹',
			category: categories[0],
			price: 4,
			description: '50% Healing, Hint of Cherry'
		},
		{
			name: 'Health Potion',
			emoji: '❤️‍🩹❤️‍🩹',
			category: categories[0],
			price: 6,
			description: '25% Healing, Hint of Watermelon'
		},
		{
			name: 'XL Mana Potion',
			emoji: '🔷🔷🔷',
			category: categories[1],
			price: 12,
			description: '100% Mana Regen, Hint of Blueberry'
		},
		{
			name: 'Mana Potion',
			emoji: '🔷🔷',
			category: categories[1],
			price: 8,
			description: '50% Mana Regen, Hint of Blue-Rasberry'
		},
		{
			name: 'SM Mana Potion',
			emoji: '🔷',
			category: categories[1],
			price: 6,
			description: '25% Mana Regen, Hint of Grape'
		},
		{
			name: 'XL Stamina Potion',
			emoji: '🧪🧪🧪',
			category: categories[2],
			price: 8,
			description: '100% Stamina Regen, Hint of GrapeFruit'
		},
		{
			name: 'Stamina Potion',
			emoji: '🧪🧪',
			category: categories[2],
			price: 5,
			description: '50% Stamina Regen, Hint of Green Apple'
		},
		{
			name: 'Sm Stamina Potion',
			emoji: '🧪',
			category: categories[2],
			price: 3,
			description: '25% Stamina Regen, Hint of Cucumber'
		},
		{
			name: 'Reg Love Potion',
			emoji: '🥰',
			category: categories[3],
			price: 18,
			description:
				'Makes a person fall in Love with you for a day, Hints of Lavander'
		},
		{
			name: 'Max Love Potion',
			emoji: '❤️‍🔥',
			category: categories[3],
			price: 30,
			description: 'Makes a person your soulmate, Hints of Passion Fruit'
		},
		{
			name: 'Heart Break Potion',
			emoji: '💔',
			category: categories[3],
			price: 25,
			description: 'Makes a person not want you, Hints of Bitter'
		},
		{
			name: 'Fire Resistence',
			emoji: '🔥',
			category: categories[4],
			price: 50,
			description: 'Makes you resistant to fire damage for 6 hours, VERY SPICY'
		},
		{
			name: 'Frost Resistance',
			emoji: '❄️',
			category: categories[4],
			price: 50,
			description:
				'Makes you resistant to frost damage for 6 hours, Hint of Mint'
		},
		{
			name: 'Earth Resistance',
			emoji: '🪨',
			category: categories[4],
			price: 50,
			description:
				'Makes you resistant to frost damage for 6 hours, Hint of Umami'
		},
		{
			name: 'Lighting Resistance',
			emoji: '⚡',
			category: categories[4],
			price: 50,
			description:
				'Makes you resistant to Lighting damage for 6 hours, Hint of Sour'
		},
		{
			name: 'Super Strength',
			emoji: '💪',
			category: categories[5],
			price: 95,
			description: 'Give you super strength for 10 min, Hint of Spinage'
		},
		{
			name: 'Mana Overload',
			emoji: '🪬',
			category: categories[5],
			price: 95,
			description:
				'Give you 200% increase to Mana capacity for 30 min, Hint of Cinnamon'
		},
		{
			name: 'Far Sight',
			emoji: '👁️‍🗨️',
			category: categories[5],
			price: 20,
			description:
				'Give you 500% of vision increase for 30 min, Hint of Apricote'
		},
		{
			name: 'Max Charisma',
			emoji: '😎',
			category: categories[5],
			price: 70,
			description: 'Everyone wants to be your Friend! Hint of Guava'
		},
		{
			name: 'Invisibility',
			emoji: '🥷',
			category: categories[6],
			price: 900,
			description: 'Makes You Invisible for 1 hour, Hint of Ginger'
		},
		{
			name: 'Speak to Animals',
			emoji: '🙉',
			category: categories[6],
			price: 250,
			description: 'Cans speak to animals for 1 hour, Hint of Bacon'
		},
		{
			name: 'Speak to the Dead',
			emoji: '👻',
			category: categories[6],
			price: 400,
			description: 'Can speak with the dead for 1 hour, Hint of coffiee'
		},
		{
			name: 'Max Luck',
			emoji: '🍀',
			category: categories[6],
			price: 1000,
			description: 'Give you 1 hour of great fortune, Hint of Vanilla'
		}
	]);

	console.log(items);

	process.exit();
})();
