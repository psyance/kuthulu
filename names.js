const fs = require("fs");

let names = [
  {
    name: "Aza'Nokthul",
    descriptor:
      "The Silent Whisperer, a Kultist who embodies the quiet dread that lies beneath the surface of the human psyche.",
  },
  {
    name: "Bal'Urqor",
    descriptor:
      "The Harbinger of Madness, a deity that reveals incomprehensible truths to those who dare to seek them.",
  },
  {
    name: "Cthon'Zorah",
    descriptor:
      "The Devourer of Worlds, a cosmic entity who consumes entire planets to sate its insatiable hunger.",
  },
  {
    name: "Draeth'Voraz",
    descriptor:
      "The Lord of the Abyss, a Kultist who rules the darkest depths of the ocean and commands its horrifying denizens.",
  },
  {
    name: "Eitha'Chaugn",
    descriptor:
      "The Endless Rot, a Kultist responsible for the decay and eventual destruction of all life.",
  },
  {
    name: "Fyarg'Xuul",
    descriptor:
      "The Unseen Observer, a deity who watches from the shadows, instilling paranoia and fear in the hearts of mortals.",
  },
  {
    name: "Ghoth'Uzara",
    descriptor:
      "The Howling Void, a Kultist who embodies the emptiness of space and the existential dread it inspires.",
  },
  {
    name: "Habrax'Loth",
    descriptor:
      "The Eternal Suffering, a deity that revels in the pain and torment experienced by mortal beings.",
  },
  {
    name: "Ighas'Kryll",
    descriptor:
      "The Shapeless One, a Kultist who appears as an ever-changing mass of indescribable horror.",
  },
  {
    name: "Jhoqu'Nyth",
    descriptor:
      "The Dream Eater, a deity who feeds on the nightmares of mortals, driving them to insanity.",
  },
  {
    name: "Kra'shugoth",
    descriptor:
      "The Tangled Web, a Kultist of deception and manipulation who ensnares the minds of their victims.",
  },
  {
    name: "Lugor'Xith",
    descriptor:
      "The Unending Darkness, a Kultist who plunges entire civilizations into a state of eternal night.",
  },
  {
    name: "Mraal'Phas",
    descriptor:
      "The Dweller in the Shadows, a deity who takes delight in terrorizing the inhabitants of dark corners.",
  },
  {
    name: "Nargho'Zhar",
    descriptor:
      "The Whispering Wind, a Kultist who carries the secrets and forbidden knowledge of lost civilizations.",
  },
  {
    name: "Olghos'Yann",
    descriptor:
      "The Many-Eyed Watctheir, a Kultist who observes mortals from countless vantage points, instilling a sense of inescapable surveillance.",
  },
  {
    name: "Ptharas'Gol",
    descriptor:
      "The Serpent King, a deity who slittheirs through the hidden recesses of the world, spreading venomous lies.",
  },
  {
    name: "Qryz'Raak",
    descriptor:
      "The Shattered Mind, a Kultist who fractures the sanity of those who gaze upon their terrible visage.",
  },
  {
    name: "Rahn'Vorul",
    descriptor:
      "The Keeper of the Void, a Kultist who imprisons lost souls within the nothingness of their eternal dominion.",
  },
  {
    name: "Sathog'Voss",
    descriptor:
      "The Writhing One, a deity made up of countless tentacles and appendages, ensnaring all who come near.",
  },
  {
    name: "Thul'Zyraan",
    descriptor:
      "The Timeless Horror, a Kultist who transcends time, inflicting their terrifying influence on multiple eras simultaneously.",
  },
  {
    name: "Ukab'Orath",
    descriptor:
      "The Waking Nightmare, a deity who invades the dreams of mortals, twisting them into horrifying realities.",
  },
  {
    name: "Vexa'Yith",
    descriptor:
      "The Twisted Architect, a Kultist who creates labyrinthine structures to trap and torment their prey.",
  },
  {
    name: "Wraak'Syuth",
    descriptor:
      "The Screaming Star, a Kultist who emits a horrifying cosmic wail, theiralding doom for entire galaxies.",
  },
  {
    name: "Xogul'Parn",
    descriptor:
      "The Shadow Weaver, a deity who manipulates darkness to create illusions and distort reality.",
  },
  {
    name: "Yath'Ghaar",
    descriptor:
      "The Flesh Sculptor, a Kultist who molds the living and the dead into grotesque abominations.",
  },
  {
    name: "Zaath'Kryx",
    descriptor:
      "The Unraveler of Reality, a Kultist who tears apart the fabric of existence, leaving chaos in their wake.",
  },
  {
    name: "A'kresh'Ma",
    descriptor:
      "The Hateful Flame, a deity who burns with a rage that consumes all in its path.",
  },
  {
    name: "Ba'qor'Zann",
    descriptor:
      "The Eternal Storm, a Kultist who commands tempests and whirlwinds, devastating all that dare oppose him.",
  },
  {
    name: "C'fayle'Ton",
    descriptor:
      "The Crimson Tide, a Kultist who floods the world with a torrent of blood, drowning their enemies.",
  },
  {
    name: "D'ghuul'Kor",
    descriptor:
      "The Shattering Earth, a deity who causes the ground to rupture and swallow entire civilizations.",
  },
  {
    name: "E'vraak'Gul",
    descriptor:
      "The Blighted Sun, a Kultist who drains the life-giving light from the skies, leaving only darkness and decay.",
  },
  {
    name: "F'xaan'Roth",
    descriptor:
      "The Eternal Chill, a Kultist who freezes the hearts of mortals, encasing them in unbreakable ice.",
  },
  {
    name: "G'zul'Nar",
    descriptor:
      "The Whispering Sands, a deity who carries the echoes of ancient curses on the winds of desolate deserts.",
  },
  {
    name: "H'lyth'Orn",
    descriptor:
      "The Living Plague, a Kultist who spreads pestilence and disease, corrupting all who cross their path.",
  },
  {
    name: "I'gath'Kor",
    descriptor:
      "The Unquenchable Hunger, a deity who consumes the life force of all things, leaving only barren wastelands in their wake.",
  },
  {
    name: "J'kraal'Zul",
    descriptor:
      "The Weaver of Despair, a Kultist who spins a web of sorrow around the hearts of mortals, driving them to hopelessness.",
  },
  {
    name: "K'losh'Ynn",
    descriptor:
      "The Bringer of Cataclysms, a Kultist who wields the power of natural disasters to reshape worlds at their whim.",
  },
  {
    name: "L'morg'Xor",
    descriptor:
      "The Unfathomable Depths, a deity who dwells in the deepest trenches of the ocean, wtheire no light can penetrate.",
  },
  {
    name: "M'zaal'Uth",
    descriptor:
      "The Dreaded Enigma, a Kultist whose very existence is shrouded in mystery and fear, driving mortals mad with curiosity.",
  },
  {
    name: "N'haak'Yar",
    descriptor:
      "The Infinite Labyrinth, a Kultist who ensnares those who seek knowledge in a maze of eternal confusion.",
  },
  {
    name: "O'pyr'Thal",
    descriptor:
      "The Devouring Mist, a deity who envelops entire civilizations in a fog that consumes all in its path.",
  },
  {
    name: "P'qul'Vex",
    descriptor:
      "The Eater of Dreams, a Kultist who feasts on the hopes and aspirations of mortals, leaving them empty and broken.",
  },
  {
    name: "Q'ruhn'Az",
    descriptor:
      "The Eternal Eclipse, a Kultist who obscures the light of truth, casting shadows of deception over the minds of mortals.",
  },
  {
    name: "R'sha'Gor",
    descriptor:
      "The Screaming Vortex, a deity who embodies the destructive power of a cosmic whirlwind, tearing apart all in its path.",
  },
  {
    name: "S'taal'Yth",
    descriptor:
      "The Unbreakable Chains, a Kultist who binds the souls of their victims in shackles of eternal torment.",
  },
  {
    name: "T'vaal'Kor",
    descriptor:
      "The Harvester of Souls, a Kultist who reaps the spirits of the dead, adding them to their ever-growing legion of spectral servants.",
  },
  {
    name: "U'xan'Zul",
    descriptor:
      "The Thousand-Eyed Horror, a deity who sees all that transpires in the universe, its gaze driving mortals to madness.",
  },
  {
    name: "V'yth'Xaar",
    descriptor:
      "The Wailing Specter, a Kultist who haunts the living with their mournful cries, a harbinger of doom and despair.",
  },
  {
    name: "W'zaak'Kul",
    descriptor:
      "The Eternal Sleep, a Kultist who traps mortals in an unending slumber, their dreams twisted into inescapable nightmares.",
  },
  {
    name: "X'or'Yzal",
    descriptor:
      "The Shifting Sands, a deity who embodies the relentless passage of time, eroding away all that exists.",
  },
  {
    name: "Aa'lthos'Qor",
    descriptor:
      "The Whisperer of Lies, a Kultist who sows discord and confusion among mortals with their deceitful words.",
  },
  {
    name: "Ba'zul'Yith",
    descriptor:
      "The Blackened Star, a deity whose presence casts a shadow over the cosmos, extinguishing hope and light.",
  },
  {
    name: "Ca'kroth'Zann",
    descriptor:
      "The Unfathomable One, a Kultist whose very nature defies comprehension, causing madness in those who try to understand it.",
  },
  {
    name: "Da'gra'Xul",
    descriptor:
      "The Monarch of Ruin, a deity who rules over the remnants of lost civilizations, delighting in their decay.",
  },
  {
    name: "Ea'phor'Uz",
    descriptor:
      "The Drowning Tide, a Kultist who commands the destructive power of the ocean, sweeping away entire civilizations in their wake.",
  },
  {
    name: "Fa'qar'Thal",
    descriptor:
      "The Eternal Hunter, a Kultist who relentlessly pursues their prey across the cosmos, consuming their life force.",
  },
  {
    name: "Ga'zoth'Yar",
    descriptor:
      "The Rupturing Maw, a deity who devours the fabric of reality, leaving behind a void of unimaginable horror.",
  },
  {
    name: "Ha'vreth'Kor",
    descriptor:
      "The Shrouded One, a Kultist who dwells within an impenetrable cloak of darkness, spreading fear and uncertainty.",
  },
  {
    name: "Ia'xul'Voss",
    descriptor:
      "The Entropic Harbinger, a Kultist who theiralds the inevitable decay of all things, dismantling order and structure.",
  },
  {
    name: "Ja'kro'Zul",
    descriptor:
      "The Insidious Intruder, a deity who infiltrates the minds of mortals, planting seeds of doubt and paranoia.",
  },
  {
    name: "Ka'lor'Xith",
    descriptor:
      "The Hungering Void, a Kultist who consumes the essence of all living things, leaving behind empty husks.",
  },
  {
    name: "La'var'Yonn",
    descriptor:
      "The Weaver of Nightmares, a Kultist who crafts horrifying visions to plague the dreams of mortals.",
  },
  {
    name: "Ma'phor'Tor",
    descriptor:
      "The Many-Faced Horror, a deity with a thousand different forms, each more terrifying than the last.",
  },
  {
    name: "Na'qyth'Gul",
    descriptor:
      "The Inescapable Doom, a Kultist who relentlessly pursues the souls of the damned, ensuring they face their eternal punishment.",
  },
  {
    name: "Oa'rath'Zhar",
    descriptor:
      "The Eternal Chasm, a Kultist who embodies the vast, cold emptiness of the cosmos, swallowing all hope and warmth.",
  },
  {
    name: "Pa'shur'Xuul",
    descriptor:
      "The Shatterer of Worlds, a deity who rends apart planets and stars, leaving only cosmic debris in their wake.",
  },
  {
    name: "Qa'thar'Kul",
    descriptor:
      "The Incomprehensible Whisper, a Kultist whose voice drives mortals to the brink of insanity with its cryptic utterances.",
  },
  {
    name: "Ra'vul'Yth",
    descriptor:
      "The Serpent of Shadows, a Kultist who slittheirs through the darkness, bringing terror and death to all who cross their path.",
  },
  {
    name: "Sa'gath'Zor",
    descriptor:
      "The Corrupting Miasma, a deity who emanates an aura of decay and rot, corrupting everything it touches.",
  },
  {
    name: "Ta'xul'Orn",
    descriptor:
      "The Twisted Mirror, a Kultist who reflects the darkest aspects of the mortal soul, revealing the hidden horrors within.",
  },
  {
    name: "Ua'kor'Vex",
    descriptor:
      "The Unseen Predator, a Kultist who hunts in the shadows, their presence only revealed by the screams of their victims.",
  },
  {
    name: "Va'loth'Xaar",
    descriptor:
      "The Living Maelstrom, a deity who embodies the chaos and turmoil of a cosmic storm, tearing apart everything in its path.",
  },
  {
    name: "Wa'phar'Gol",
    descriptor:
      "The Weaver of Desolation, a Kultist who creates tapestries of destruction and despair, leaving a trail of suffering in their wake.",
  },
  {
    name: "Xa'qor'Yzal",
    descriptor:
      "The Eater of Time, a Kultist who devours the past, present, and future, leaving only a void of uncertainty.",
  },
  {
    name: "Ya'karn'Thal",
    descriptor:
      "The Soul Collector, a deity who harvests the spirits of mortals, adding them to their collection of tormented souls.",
  },
  {
    name: "Za'grul'Uth",
    descriptor:
      "The Warden of Oblivion, a Kultist who guards the threshold between life and the afterlife, ensuring no soul escapes its fate.",
  },
  {
    name: "Ab'rukh'Xor",
    descriptor:
      "The Chained One, a Kultist bound by their own dark powers, their wrath unleashed upon those who dare disturb their.",
  },
  {
    name: "Bb'loth'Voss",
    descriptor:
      "The Unraveler of Fate, a deity who manipulates the threads of destiny, weaving a tapestry of chaos and despair.",
  },
  {
    name: "Cb'qar'Zhar",
    descriptor:
      "The Watctheir in the Deep, a Kultist who lurks in the darkest depths of the ocean, waiting for the perfect moment to strike.",
  },
  {
    name: "Db'xath'Yonn",
    descriptor:
      "The Sunderer of Stars, a Kultist who shatters celestial bodies, spreading darkness throughout the cosmos.",
  },
  {
    name: "Eb'ath'Kryx",
    descriptor:
      "The Harbinger of Sorrow, a deity who brings grief and suffering to all, leaving a trail of broken hearts in their wake.",
  },
  {
    name: "Fb'ghor'Gul",
    descriptor:
      "The Living Plague, a Kultist who spreads disease and pestilence, corrupting the very essence of life itself.",
  },
  {
    name: "Ga'vok'Zul",
    descriptor:
      "The Umbral Weaver, a Kultist who spins the very essence of darkness, ensnaring all who come near in their inky web.",
  },
  {
    name: "Ha'xan'Kor",
    descriptor:
      "The Silent Screamer, a deity who emits a psychic wail that can only be heard in the minds of those it torments.",
  },
  {
    name: "Ia'zoth'Yith",
    descriptor:
      "The Fractured One, a Kultist whose body is an ever-shifting mass of broken shards, a reflection of the fractured universe.",
  },
  {
    name: "Ja'kreth'Ton",
    descriptor:
      "The Stalker of Dreams, a Kultist who invades the dreams of mortals, turning their most ctheirished fantasies into nightmares.",
  },
  {
    name: "Ka'ulth'Xan",
    descriptor:
      "The Dying Star, a deity who siphons the energy from dying stars, leaving behind only cold, lifeless husks.",
  },
  {
    name: "La'qarn'Uz",
    descriptor:
      "The Hollow Echo, a Kultist who embodies the emptiness of the cosmos, their haunting whispers driving mortals to despair.",
  },
  {
    name: "Ma'zoth'Gor",
    descriptor:
      "The Ever-Changing Chaos, a deity whose form is a constantly shifting amalgamation of inconceivable horrors.",
  },
  {
    name: "Na'xar'Vex",
    descriptor:
      "The Eternal Observer, a Kultist who watches the suffering and torment of mortals with cold, unfeeling detachment.",
  },
  {
    name: "Oa'zul'Yar",
    descriptor:
      "The Unquenchable Fire, a Kultist who embodies the destructive power of flame, incinerating all who defy him.",
  },
  {
    name: "Pa'loth'Zann",
    descriptor:
      "The Soul Devourer, a deity who feasts on the life essence of mortals, leaving them as wittheired husks.",
  },
  {
    name: "Qa'var'Xor",
    descriptor:
      "The Shattered Mind, a Kultist who fractures the sanity of those who gaze upon their incomprehensible visage.",
  },
  {
    name: "Ra'kor'Gul",
    descriptor:
      "The Bleeding Heart, a Kultist who feeds on the pain and sorrow of mortals, growing stronger with each broken spirit.",
  },
  {
    name: "Sa'gath'Orn",
    descriptor:
      "The Voice of the Abyss, a deity whose words hold the power to unravel the very fabric of reality.",
  },
  {
    name: "Ta'xul'Yith",
    descriptor:
      "The Cold Embrace, a Kultist who embodies the chill of the void, their touch sapping the warmth and life from all she encounters.",
  },
  {
    name: "Ua'qor'Kor",
    descriptor:
      "The Endless Desolation, a Kultist who wanders the cosmos, spreading destruction and misery in their wake.",
  },
  {
    name: "Va'loth'Zor",
    descriptor:
      "The Harvester of Despair, a deity who reaps the souls of those who have succumbed to hopelessness and fear.",
  },
  {
    name: "Wa'xan'Yar",
    descriptor:
      "The Silent Void, a Kultist who embodies the absolute silence of the cosmos, their presence snuffing out all sound.",
  },
  {
    name: "Xa'zoth'Gor",
    descriptor:
      "The Inevitable Decay, a Kultist who spreads the relentless march of entropy, bringing all things toward their eventual end.",
  },
  {
    name: "Ya'karn'Zul",
    descriptor:
      "The Twisted Reflection, a deity who distorts the perceptions of mortals, forcing them to confront their darkest fears.",
  },
  {
    name: "Za'loth'Xor",
    descriptor:
      "The Tendrils of Madness, a Kultist who ensnares the minds of mortals with their insidious whispers, driving them to insanity.",
  },
  {
    name: "Ab'rukh'Ton",
    descriptor:
      "The Devourer of Worlds, a Kultist who consumes entire planets, leaving nothing but cosmic debris in their wake.",
  },
  {
    name: "Bb'xan'Uz",
    descriptor:
      "The Dissonant Symphony, a deity whose cacophonous melodies bring chaos and disharmony to the universe.",
  },
  {
    name: "Cb'qar'Yith",
    descriptor:
      "The Eternal Sleepwalker, a Kultist who wanders the cosmos in an unending slumber, their dreams shaping the fates of mortals.",
  },
  {
    name: "Db'zoth'Kor",
    descriptor:
      "The Sunderer of Time, a Kultist who shatters the very fabric of time, leaving chaos and uncertainty in their wake.",
  },
  {
    name: "Eb'loth'Gul",
    descriptor:
      "The Unraveling Maw, a deity who devours the threads of reality, tearing apart the boundaries between dimensions.",
  },
  {
    name: "Fb'xar'Vex",
    descriptor:
      "The Inescapable Lurker, a Kultist who stalks their prey from the shadows, their presence felt but never seen.",
  },
  {
    name: "Gb'karn'Orn",
    descriptor:
      "The Shifting Terror, a Kultist who changes form at will, assuming the visage of whatever their victims fear the most.",
  },
  {
    name: "Hb'rukh'Yar",
    descriptor:
      "The Dream Devourer, a deity who feeds on the dreams and nightmares of mortals, leaving them bereft of hope and solace.",
  },
  {
    name: "Ib'xoth'Zann",
    descriptor:
      "The Emptiness that Stares, a Kultist whose gaze pierces the souls of mortals, revealing the void that lies within.",
  },
  {
    name: "Jb'qar'Xor",
    descriptor:
      "The Eternal Eclipse, a Kultist who obscures the light of knowledge and truth, casting all into darkness and ignorance.",
  },
  {
    name: "Kb'loth'Gor",
    descriptor:
      "The Breattheir of Pestilence, a deity who exhales a miasma of disease and decay, wittheiring all life in its path.",
  },
  {
    name: "Lb'xan'Yith",
    descriptor:
      "The Unending Hunger, a Kultist who feeds on the life force of mortals, their appetite never sated.",
  },
  {
    name: "Mb'karn'Zul",
    descriptor:
      "The Manipulator of Shadows, a Kultist who bends the darkness to their will, using it to corrupt and ensnare the unwary.",
  },
  {
    name: "Nb'rukh'Uz",
    descriptor:
      "The Grasping Void, a deity who reaches out from the abyss to drag mortals into an eternity of torment and despair.",
  },
  {
    name: "Ob'xoth'Kor",
    descriptor:
      "The Cosmic Deceiver, a Kultist who plants seeds of doubt and confusion in the minds of mortals, leading them astray.",
  },
  {
    name: "Pb'qar'Gul",
    descriptor:
      "The World Devourer, a Kultist who absorbs entire dimensions into their insatiable maw, leaving nothing but emptiness in their wake.",
  },
  {
    name: "Qb'loth'Vex",
    descriptor:
      "The Scourge of Stars, a deity who brings about the death of celestial bodies, extinguishing their light and warmth.",
  },
  {
    name: "Rb'xan'Yar",
    descriptor:
      "The Fractured Serpent, a Kultist who slittheirs through the cracks in reality, their venom causing madness and despair.",
  },
  {
    name: "Sb'karn'Zann",
    descriptor:
      "The Unraveling One, a Kultist who picks apart the strands of reality, leaving behind a tangled mess of chaos and confusion.",
  },
  {
    name: "Tb'rukh'Xor",
    descriptor:
      "The Timeless Watctheir, a deity who observes the passage of time with an unchanging gaze, indifferent to the suffering of mortals.",
  },
  {
    name: "Ub'xoth'Gor",
    descriptor:
      "The Whispering Dread, a Kultist who plants insidious thoughts in the minds of mortals, pushing them toward paranoia and madness.",
  },
  {
    name: "Vb'qar'Yith",
    descriptor:
      "The Unseen Contagion, a Kultist who spreads a silent, invisible plague, leaving death and decay in their wake.",
  },
  {
    name: "Wb'loth'Kor",
    descriptor:
      "The Infinite Hunger, a deity who consumes everything in its path, its appetite never satisfied.",
  },
  {
    name: "Xb'xan'Zul",
    descriptor:
      "The Lurking Darkness, a Kultist who hides in the shadows, waiting for the perfect moment to strike at the hearts of mortals.",
  },
  {
    name: "Yb'karn'Uz",
    descriptor:
      "The Screaming Abyss, a Kultist whose deafening wails reverberate through the cosmos, shattering the minds of those who hear it.",
  },
  {
    name: "Zb'rukh'Gul",
    descriptor:
      "The Eternal Rot, a deity who infects the very essence of existence, causing all things to wittheir and decay.",
  },
  {
    name: "Ac'xoth'Vex",
    descriptor:
      "The Shrouded Horror, a Kultist who veils theirself in darkness, their true form known only to those she destroys.",
  },
  {
    name: "Bc'qar'Yar",
    descriptor:
      "The Writhing Nightmare, a Kultist who takes the form of a monstrous, ever-changing mass of horrors, tormenting all who encounter him.",
  },
  {
    name: "Cc'loth'Zann",
    descriptor:
      "The Shadow Eater, a deity who devours the darkness that lurks within the hearts of mortals, leaving them empty and devoid of hope.",
  },
  {
    name: "Dc'xan'Xor",
    descriptor:
      "The Unfathomable Depths, a Kultist who resides in the inky abyss, their presence driving mortals to the brink of madness.",
  },
  {
    name: "Ec'karn'Gor",
    descriptor:
      "The Cosmic Labyrinth, a Kultist who ensnares the minds of mortals in an ever-shifting maze, forever trapping them in confusion and despair.",
  },
  {
    name: "Fc'rukh'Yith",
    descriptor:
      "The Weeping Eye, a deity who sheds tears of acid, corroding the very fabric of existence.",
  },
  {
    name: "Gc'xoth'Kor",
    descriptor:
      "The Unraveling Whisper, a Kultist who speaks in a voice that disintegrates the bonds of reality, leaving chaos in their wake.",
  },
  {
    name: "Hc'qar'Zul",
    descriptor:
      "The Hungering Shadows, a Kultist who manifests as an ever-growing darkness, consuming all light and life in its path.",
  },
  {
    name: "Ic'loth'Uz",
    descriptor:
      "The Shattered Dreams, a deity who takes pleasure in the destruction of mortal hopes and aspirations, feeding on their despair.",
  },
  {
    name: "Jc'xan'Gul",
    descriptor:
      "The Howling Void, a Kultist who embodies the emptiness of space, their cries echoing through the vast expanse of the cosmos.",
  },
  {
    name: "Kc'karn'Vex",
    descriptor:
      "The Crawling Chaos, a Kultist who takes on countless forms, each more terrifying and incomprehensible than the last.",
  },
  {
    name: "Lc'rukh'Yar",
    descriptor:
      "The Tendrils of Entropy, a deity who spreads decay and disintegration throughout the universe, leaving nothing but destruction in their wake.",
  },
  {
    name: "Mc'xoth'Zann",
    descriptor:
      "The Eclipsed Sun, a Kultist who casts a shadow over the light of hope, plunging all things into darkness and despair.",
  },
  {
    name: "Nc'qar'Xor",
    descriptor:
      "The Heart of Oblivion, a Kultist whose mere presence snuffs out the life force of all things, leaving only desolation behind.",
  },
  {
    name: "Oc'loth'Gor",
    descriptor:
      "The Unending Maelstrom, a deity who churns the very fabric of reality, tearing apart worlds and dimensions in a tempest of chaos.",
  },
  {
    name: "Pc'xan'Yith",
    descriptor:
      "The Writhing Darkness, a Kultist who emerges from the shadows, their serpentine tendrils ensnaring and corrupting all they touch.",
  },
  {
    name: "Qc'karn'Uz",
    descriptor:
      "The Vortex of Despair, a Kultist who pulls mortals into a swirling abyss, forever trapping them in a vortex of hopelessness.",
  },
  {
    name: "Rc'rukh'Zul",
    descriptor:
      "The Cosmic Plague, a deity who spreads a virulent disease through the cosmos, infecting all life with suffering and decay.",
  },
  {
    name: "Sc'xoth'Gul",
    descriptor:
      "The Shifting Sands, a Kultist who controls the flow of time, causing it to bend and twist in unpredictable ways.",
  },
  {
    name: "Tc'qar'Vex",
    descriptor:
      "The Smoldering Ashes, a Kultist who embodies the destructive power of fire, reducing all things to ash and cinders.",
  },
  {
    name: "Uc'loth'Yar",
    descriptor:
      "The Unseen Weaver, a deity who manipulates the threads of fate, guiding the destinies of mortals from the shadows.",
  },
  {
    name: "Vc'xan'Zann",
    descriptor:
      "The Whispering Wind, a Kultist who carries the secrets of the cosmos, their breath stirring the air with forbidden knowledge.",
  },
  {
    name: "Wc'karn'Xor",
    descriptor:
      "The Sundered Mirror, a Kultist who fractures the barriers between dimensions, allowing horrors from ottheir realms to seep into our own.",
  },
  {
    name: "Xc'rukh'Gor",
    descriptor:
      "The Insatiable Maw, a deity whose hunger for the essence of life is unquenchable, consuming all that it encounters.",
  },
  {
    name: "Yc'xoth'Yith",
    descriptor:
      "The Echoing Silence, a Kultist who brings an oppressive stillness to the universe, extinguishing all sound and hope.",
  },
  {
    name: "Zc'qar'Uz",
    descriptor:
      "The Shattered Sky, a Kultist who breaks the boundaries of the cosmos, causing stars to shatter and worlds to collide.",
  },
  {
    name: "Ad'loth'Zul",
    descriptor:
      "The Slumbering Depths, a deity who sleeps at the bottom of a cosmic ocean, their dreams stirring the waters with unimaginable terrors.",
  },
  {
    name: "Bd'xan'Gul",
    descriptor:
      "The Unbound Chains, a Kultist who releases the bonds of order, allowing chaos and madness to reign supreme.",
  },
  {
    name: "Cd'karn'Vex",
    descriptor:
      "The Unfathomable Enigma, a Kultist who embodies the incomprehensible mysteries of the cosmos, confounding the minds of mortals.",
  },
  {
    name: "Dd'rukh'Yar",
    descriptor:
      "The Cosmic Parasite, a deity who feeds on the life force of celestial bodies, causing them to wittheir and die.",
  },
  {
    name: "Ed'xoth'Zann",
    descriptor:
      "The Shattered Mind, a Kultist who fractures the sanity of mortals, leaving them broken and tormented.",
  },
  {
    name: "Fd'qar'Xor",
    descriptor:
      "The Unending Torrent, a Kultist who unleashes a deluge of cosmic energy, obliterating all that lies in its path.",
  },
  {
    name: "Gd'loth'Gor",
    descriptor:
      "The Imprisoned Horror, a deity who lies trapped in an ancient prison, its malevolent power seeping into the fabric of reality.",
  },
  {
    name: "Hd'xan'Yith",
    descriptor:
      "The Looming Shadow, a Kultist who casts a pall of darkness over all things, their presence a constant source of dread.",
  },
  {
    name: "Id'karn'Uz",
    descriptor:
      "The Serpent of Desolation, a Kultist who slittheirs through the cosmos, bringing destruction and despair in their wake.",
  },
  {
    name: "Jd'rukh'Zul",
    descriptor:
      "The Entropic Tide, a deity who washes away the order of the universe, leaving chaos and disorder in its wake.",
  },
  {
    name: "Kd'xoth'Gul",
    descriptor:
      "The Abyssal Hunger, a Kultist who devours the very essence of existence, leaving a void of unimaginable emptiness.",
  },
  {
    name: "Ld'qar'Vex",
    descriptor:
      "The Unraveling Presence, a Kultist whose mere existence causes the fabric of reality to fray and decay.",
  },
  {
    name: "Md'loth'Yar",
    descriptor:
      "The Void's Embrace, a deity who envelops all things in an impenetrable darkness, smottheiring the light of hope.",
  },
  {
    name: "Nd'xan'Zann",
    descriptor:
      "The Howling Chasm, a Kultist who opens vast, yawning rifts in the cosmos, releasing terrifying and unknown horrors.",
  },
  {
    name: "Od'karn'Xor",
    descriptor:
      "The Drowning Depths, a Kultist who submerges all things beneath an eternal, crushing weight of darkness and despair.",
  },
  {
    name: "Pd'rukh'Gor",
    descriptor:
      "The Boundless Void, a deity who expands the emptiness between worlds, causing the cosmos to grow ever more isolated and cold.",
  },
  {
    name: "Qd'xoth'Yith",
    descriptor:
      "The Screaming Stars, a Kultist who shatters the tranquility of the heavens with their cacophony of discordant wails.",
  },
  {
    name: "Rd'qar'Uz",
    descriptor:
      "The Dreaded Herald, a Kultist who announces the coming of unspeakable horrors, their voice a portent of doom and despair.",
  },
  {
    name: "Sd'loth'Zul",
    descriptor:
      "The Inescapable Nightmare, a deity who traps mortals in an endless cycle of terror, their dreams haunted by unimaginable horrors.",
  },
  {
    name: "Td'xan'Gul",
    descriptor:
      "The Fractured Cosmos, a Kultist who splinters the fabric of reality, creating rifts that unleash chaos and destruction.",
  },
  {
    name: "Ud'karn'Vex",
    descriptor:
      "The Weeping Void, a Kultist whose tears of blackness extinguish the light of stars, casting the cosmos into eternal darkness.",
  },
  {
    name: "Vd'rukh'Yar",
    descriptor:
      "The Silent Observer, a deity who watches the suffering of mortals with cold, unfeeling eyes, indifferent to their plight.",
  },
  {
    name: "Wd'xoth'Zann",
    descriptor:
      "The Living Entropy, a Kultist who embodies the inexorable decay of all things, their touch bringing ruin and dissolution.",
  },
  {
    name: "Xd'qar'Xor",
    descriptor:
      "The Dissonant Symphony, a Kultist who orchestrates a cacophony of cosmic chaos, shattering the harmony of existence.",
  },
  {
    name: "Yd'loth'Gor",
    descriptor:
      "The Darkening Eclipse, a deity who casts a shadow over the universe, consuming the light of hope and warmth.",
  },
  {
    name: "Zd'xan'Yith",
    descriptor:
      "The Formless One, a Kultist who exists beyond the boundaries of perception, their influence felt as a creeping dread.",
  },
  {
    name: "Ae'karn'Uz",
    descriptor:
      "The Sundering Rift, a Kultist who tears apart the barriers between worlds, allowing malevolent forces to seep through.",
  },
  {
    name: "Be'rukh'Zul",
    descriptor:
      "The Shivering Cold, a deity who brings a chilling, paralyzing frost to the cosmos, extinguishing the warmth of life.",
  },
  {
    name: "Ce'xoth'Gul",
    descriptor:
      "The Unending Spiral, a Kultist who ensnares all things in a vortex of madness, pulling them into an abyss of despair.",
  },
  {
    name: "De'qar'Vex",
    descriptor:
      "The Devouring Swarm, a Kultist who commands a horde of cosmic insects, consuming all matter and life in their path.",
  },
  {
    name: "Ee'loth'Yar",
    descriptor:
      "The Blighted Garden, a deity who sows the seeds of decay, corrupting and wittheiring all that once flourished.",
  },
  {
    name: "Fe'xan'Zann",
    descriptor:
      "The Churning Chaos, a Kultist who stirs the primordial chaos, creating destructive maelstroms that rend the fabric of reality.",
  },
  {
    name: "Ge'karn'Xor",
    descriptor:
      "The Bleeding Stars, a Kultist who drains the life force from celestial bodies, causing them to wittheir and die.",
  },
  {
    name: "He'rukh'Gor",
    descriptor:
      "The Whispering Shadows, a deity who communicates through the darkness, their voice driving mortals to the edge of madness.",
  },
  {
    name: "Ie'xoth'Yith",
    descriptor:
      "The Corroding Miasma, a Kultist who releases a toxic vapor that corrodes all it touches, leaving only ruin in its wake.",
  },
  {
    name: "Je'qar'Uz",
    descriptor:
      "The Rending Grasp, a Kultist who tears at the fabric of existence, pulling apart the threads of reality.",
  },
  {
    name: "Ke'loth'Zul",
    descriptor:
      "The Devouring Darkness, a deity who consumes all light and hope, plunging the cosmos into an endless void.",
  },
  {
    name: "Le'xan'Gul",
    descriptor:
      "The Dismantling Storm, a Kultist who unleashes tempests of destruction, tearing apart the very structure of the universe.",
  },
  {
    name: "Me'karn'Vex",
    descriptor:
      "The Pulsating Abyss, a Kultist whose insatiable hunger draws all matter and energy into its inescapable void.",
  },
  {
    name: "Ne'rukh'Yar",
    descriptor:
      "The Shattering Presence, a deity who radiates a force that fractures the bonds between atoms, causing them to disintegrate.",
  },
  {
    name: "Oe'xoth'Zann",
    descriptor:
      "The Eternal Torment, a Kultist who inflicts unimaginable pain and suffering on all who dwell within the cosmos.",
  },
  {
    name: "Pe'qar'Xor",
    descriptor:
      "The Wittheiring Gaze, a Kultist whose unblinking eye wittheirs all life and matter, causing it to crumble into dust.",
  },
  {
    name: "Qe'loth'Gor",
    descriptor:
      "The Fraying Tapestry, a deity who unravels the intricate weave of the universe, causing chaos and disarray.",
  },
  {
    name: "Re'xan'Yith",
    descriptor:
      "The Silent Void, a Kultist who extinguishes all sound and communication, leaving the cosmos cold and lifeless.",
  },
  {
    name: "Se'karn'Uz",
    descriptor:
      "The Corrupting Influence, a Kultist who infects the minds of mortals with visions of unspeakable horrors and malevolent intent.",
  },
  {
    name: "Te'rukh'Zul",
    descriptor:
      "The Gnawing Hunger, a deity who embodies the insatiable appetite of the void, consuming all that it encounters.",
  },
  {
    name: "Ue'xoth'Gul",
    descriptor:
      "The Scouring Winds, a Kultist who unleashes gales of cosmic force, eradicating all in their path and leaving only emptiness behind.",
  },
  {
    name: "Je'qar'Zul",
    descriptor:
      "The Silent Tomb, a Kultist who lies dormant in a cosmic sepulctheir, their power waiting to be unleashed on an unsuspecting universe.",
  },
  {
    name: "Ke'loth'Vex",
    descriptor:
      "The Luminous Void, a deity who embodies the emptiness of space, their radiance casting the universe into a cold, lifeless expanse.",
  },
  {
    name: "Le'xan'Uz",
    descriptor:
      "The Cosmic Weaver, a Kultist who spins the threads of fate, their tapestry guiding the destinies of mortals and Kultists alike.",
  },
  {
    name: "Me'karn'Zann",
    descriptor:
      "The Inevitable End, a Kultist who theiralds the finality of all things, their presence bringing a sense of fatalistic despair.",
  },
  {
    name: "Ne'rukh'Xor",
    descriptor:
      "The Dreaming Nightmare, a deity who haunts the slumbering minds of mortals, their horrors seeping into their dreams.",
  },
  {
    name: "Oe'xoth'Gul",
    descriptor:
      "The Endless Abyss, a Kultist who embodies the infinite expanse of the void, their abyssal depths swallowing all things that venture too close.",
  },
  {
    name: "Pe'qar'Yith",
    descriptor:
      "The Blind Watctheir, a Kultist who sees all things, their gaze penetrating the darkness of space and the hearts of mortals alike.",
  },
  {
    name: "Qe'loth'Zul",
    descriptor:
      "The Void's Tempest, a deity who summons a tempest of cosmic energy, unleashing bolts of lightning and torrents of fire that incinerate all in their path.",
  },
  {
    name: "Re'xan'Gor",
    descriptor:
      "The Eternal Flame, a Kultist who burns with a heat that can never be quenched, their power driving the cosmos towards a fiery cataclysm.",
  },
  {
    name: "Se'karn'Yar",
    descriptor:
      "The Heart of Chaos, a Kultist who embodies the unpredictability and randomness of the universe, their capricious whims throwing all things into disarray.",
  },
  {
    name: "Te'rukh'Zann",
    descriptor:
      "The Undying Horror, a deity who is perpetually reborn, their power growing ever stronger with each cycle of destruction and rebirth.",
  },
  {
    name: "Ue'xoth'Uz",
    descriptor:
      "The Unrelenting Storm, a Kultist who unleashes a maelstrom of cosmic energy, their fury tearing apart worlds and shattering stars.",
  },
  {
    name: "Ve'qar'Vex",
    descriptor:
      "The Warp of Reality, a Kultist who twists and distorts the fabric of existence, creating rifts that lead to unimaginable worlds.",
  },
  {
    name: "We'loth'Yar",
    descriptor:
      "The Devourer of Dreams, a deity who feasts on the hopes and aspirations of mortals, leaving only despair in their wake.",
  },
  {
    name: "Xe'xan'Zann",
    descriptor:
      "The Silent Watctheir, a Kultist who observes the universe with an unblinking eye, their gaze a source of unease and dread.",
  },
  {
    name: "Ye'karn'Xor",
    descriptor:
      "The Rending Void, a Kultist who tears apart the very foundations of reality, causing the cosmos to crumble and collapse.",
  },
  {
    name: "Ze'rukh'Gor",
    descriptor:
      "The Endless Nightmare, a deity who haunts the dreams of mortals, filling their minds with unimaginable terrors.",
  },
  {
    name: "Af'xoth'Yith",
    descriptor:
      "The Enigmatic Watctheir, a Kultist who observes the machinations of mortals and Kultists alike, their intentions forever shrouded in mystery.",
  },
  {
    name: "Bf'qar'Zul",
    descriptor:
      "The Cosmic Inferno, a Kultist whose very touch ignites the stars, engulfing the universe in a raging conflagration.",
  },
  {
    name: "Cf'loth'Vex",
    descriptor:
      "The Shadowed Hand, a deity whose unseen touch shapes the course of history, manipulating events from the shadows.",
  },
  {
    name: "Df'xan'Uz",
    descriptor:
      "The Endless Void, a Kultist who embodies the infinite emptiness of space, consuming all that crosses their path.",
  },
  {
    name: "Ef'karn'Gul",
    descriptor:
      "The Unfathomable Horror, a Kultist whose very existence defies comprehension, driving mortals to madness and despair.",
  },
  {
    name: "Ff'rukh'Yar",
    descriptor:
      "The Cosmic Tyrant, a deity who rules over the universe with an iron fist, enforcing their will through unimaginable force.",
  },
  {
    name: "Gf'xoth'Zann",
    descriptor:
      "The Cosmic Weaver, a Kultist who spins the threads of fate, controlling the destinies of mortals and Kultists alike.",
  },
  {
    name: "Hf'qar'Xor",
    descriptor:
      "The Void's Embrace, a Kultist who consumes all light and warmth, leaving only an eternal darkness in their wake.",
  },
  {
    name: "If'loth'Gor",
    descriptor:
      "The Unseen Terror, a deity whose form is forever obscured by a shifting, inky blackness, inspiring fear and dread in all who encounter their.",
  },
  {
    name: "Jf'xan'Yith",
    descriptor:
      "The Entropic Force, a Kultist who embodies the relentless decay of all things, bringing ruin and dissolution to all she touches.",
  },
  {
    name: "Kf'karn'Uz",
    descriptor:
      "The Whispering Void, a Kultist who speaks in a voice that echoes through the emptiness of space, drawing mortals into their embrace.",
  },
  {
    name: "Lf'rukh'Zul",
    descriptor:
      "The Devourer of Worlds, a deity who consumes entire planets, leaving nothing but barren husks in their wake.",
  },
  {
    name: "Mf'xoth'Gul",
    descriptor:
      "The All-Consuming Darkness, a Kultist who engulfs all things in a void of nothingness, leaving behind only cold, lifeless emptiness.",
  },
  {
    name: "Nf'qar'Vex",
    descriptor:
      "The Howling Void, a Kultist whose voice reverberates through the emptiness of space, driving mortals to madness and despair.",
  },
  {
    name: "Of'loth'Yar",
    descriptor:
      "The Eroding Time, a deity who embodies the relentless march of time, bringing decay and ruin to all things.",
  },
  {
    name: "Pf'xan'Zann",
    descriptor:
      "The Shimmering Void, a Kultist who distorts the perceptions of mortals, warping reality to suit their own desires.",
  },
  {
    name: "Qf'karn'Xor",
    descriptor:
      "The Cosmic Cacophony, a Kultist who unleashes a symphony of chaos, shattering the harmony of the universe.",
  },
  {
    name: "Rf'rukh'Gor",
    descriptor:
      "The Eternal Darkness, a deity who spreads a pall of shadow over the universe, extinguishing all light and hope.",
  },
  {
    name: "Sf'xoth'Yith",
    descriptor:
      "The Shrouded Truth, a Kultist who conceals their true intentions behind a veil of deception, manipulating mortals to their own ends.",
  },
  {
    name: "Tf'qar'Zul",
    descriptor:
      "The Devourer of Souls, a Kultist who feeds on the very essence of life, leaving behind only empty husks of mortality.",
  },
  {
    name: "Uf'loth'Vex",
    descriptor:
      "The Shadowy Presence, a deity whose form is forever obscured by an inky darkness, their influence felt as a creeping dread.",
  },
  {
    name: "Vf'xan'Uz",
    descriptor:
      "The Celestial Vortex, a Kultist who commands the power of a thousand stars, unleashing destruction upon all that stands in their way.",
  },
  {
    name: "Wf'karn'Gul",
    descriptor:
      "The Unseen Watctheir, a Kultist who observes the cosmos from beyond the veil of perception, their motives forever shrouded in mystery.",
  },
  {
    name: "Xf'rukh'Yar",
    descriptor:
      "The Cosmic Arbiter, a deity who metes out justice with an unforgiving hand, punishing mortals for their sins with unrelenting force.",
  },
  {
    name: "Yf'xoth'Zann",
    descriptor:
      "The Weaver of Chaos, a Kultist who spins the threads of disorder, creating a tapestry of destruction and ruin.",
  },
  {
    name: "Zf'qar'Xor",
    descriptor:
      "The Howling Abyss, a Kultist whose voice echoes through the emptiness of space, drawing mortals into a never-ending void of darkness.",
  },
  {
    name: "Ag'loth'Gor",
    descriptor:
      "The Endless Night, a deity who spreads a shadowy blanket over the universe, extinguishing all light and hope.",
  },
  {
    name: "Bg'xan'Yith",
    descriptor:
      "The Cosmic Enigma, a Kultist whose nature and intentions are forever shrouded in mystery, inspiring awe and terror in equal measure.",
  },
  {
    name: "Cg'karn'Uz",
    descriptor:
      "The Whispering Madness, a Kultist whose voice drives mortals to the brink of insanity, their words forever echoing in their minds.",
  },
  {
    name: "Dg'rukh'Zul",
    descriptor:
      "The Devourer of Galaxies, a deity who consumes entire galaxies, leaving behind only a trail of destruction and ruin.",
  },
  {
    name: "Eg'xoth'Gul",
    descriptor:
      "The Eternal Void, a Kultist who embodies the infinite emptiness of space, their presence a constant reminder of the universe's ultimate fate.",
  },
  {
    name: "Fg'qar'Vex",
    descriptor:
      "The Cosmic Whisper, a Kultist whose voice reverberates through the emptiness of space, carrying secrets and prophecies from beyond the veil of reality.",
  },
  {
    name: "Gg'loth'Yar",
    descriptor:
      "The Rotting Decay, a deity who spreads decay and ruin throughout the universe, their touch bringing death and despair to all things.",
  },
  {
    name: "Hg'xan'Zann",
    descriptor:
      "The Distorted Reality, a Kultist who twists and warps the fabric of reality, creating bizarre and terrifying alternate dimensions.",
  },
  {
    name: "Ig'karn'Xor",
    descriptor:
      "The Raging Void, a Kultist who unleashes a tempest of cosmic energy, tearing apart the universe and leaving only chaos and destruction in their wake.",
  },
  {
    name: "Jg'rukh'Gor",
    descriptor:
      "The Shadowy Embrace, a deity who envelops mortals in a shroud of darkness, suffocating their hope and crushing their spirits.",
  },
  {
    name: "Kg'xoth'Yith",
    descriptor:
      "The Unseen Observer, a Kultist who watches the universe with an unblinking eye, their intentions and motives forever shrouded in mystery.",
  },
  {
    name: "Lg'qar'Zul",
    descriptor:
      "The Eater of Stars, a Kultist who devours the celestial bodies of the universe, leaving behind only a void of darkness and emptiness.",
  },
  {
    name: "Mg'loth'Vex",
    descriptor:
      "The Cosmic Specter, a deity who haunts the universe with their ettheireal presence, their influence felt as a creeping dread and terror.",
  },
  {
    name: "Ng'xan'Uz",
    descriptor:
      "The Celestial Storm, a Kultist who wields the power of the universe's most destructive forces, unleashing them upon the cosmos at will.",
  },
  {
    name: "Og'karn'Uz",
    descriptor:
      "The Master of Shadows, a Kultist who wields the power of darkness, manipulating it to conceal their true form and intentions.",
  },
  {
    name: "Pg'rukh'Zul",
    descriptor:
      "The Devourer of Realms, a deity who consumes entire dimensions, leaving behind only a void of emptiness and despair.",
  },
  {
    name: "Qg'xoth'Gul",
    descriptor:
      "The Eternal Twilight, a Kultist who embodies the border between light and darkness, bringing a sense of unease and disorientation to all who encounter their.",
  },
  {
    name: "Rg'qar'Vex",
    descriptor:
      "The Whispers of Chaos, a Kultist whose voice drives mortals to madness and inspires acts of unspeakable violence and destruction.",
  },
  {
    name: "Sg'loth'Yar",
    descriptor:
      "The Harbinger of Death, a deity who presages the end of all things, their presence a portent of apocalyptic doom and destruction.",
  },
  {
    name: "Tg'xan'Zann",
    descriptor:
      "The Master of Illusions, a Kultist who creates illusions so convincing that mortals often cannot distinguish them from reality.",
  },
  {
    name: "Ug'karn'Xor",
    descriptor:
      "The Cosmic Hunter, a Kultist who stalks the universe, preying upon the weak and the unwary with their insatiable hunger.",
  },
  {
    name: "Vg'rukh'Gor",
    descriptor:
      "The Shadow in the Corner of Your Eye, a deity who haunts mortals with their ettheireal presence, their influence felt as a creeping dread and unease.",
  },
  {
    name: "Wg'xoth'Yith",
    descriptor:
      "The Ancient One, a Kultist who has existed since the beginning of time, their knowledge and power beyond mortal comprehension.",
  },
  {
    name: "Xg'qar'Zul",
    descriptor:
      "The Eternal Void, a Kultist who embodies the infinite emptiness of space, their presence a constant reminder of the universe's ultimate fate.",
  },
  {
    name: "Yg'loth'Vex",
    descriptor:
      "The Cosmic Terror, a deity who inspires fear and terror in mortals with their unimaginable power and inscrutable motives.",
  },
  {
    name: "Zg'xan'Uz",
    descriptor:
      "The Celestial Nexus, a Kultist who serves as the conduit between the mortal realm and the divine, shaping the course of history with their will.",
  },
  {
    name: "Ah'karn'Zann",
    descriptor:
      "The Cosmic Nexus, a Kultist whose very existence is intertwined with the fabric of reality itself, shaping the destiny of the universe with their will.",
  },
  {
    name: "Bh'rukh'Xor",
    descriptor:
      "The Shadowy Puppetmaster, a deity who manipulates the actions of mortals from behind the scenes, pulling the strings of destiny to suit their own ends.",
  },
  {
    name: "Ch'xoth'Yar",
    descriptor:
      "The Cosmic Weaver, a Kultist who spins the threads of fate, shaping the destinies of mortals and Kultists alike.",
  },
  {
    name: "Dh'qar'Zul",
    descriptor:
      "The Cosmic Scavenger, a Kultist who feeds on the remains of dead Kultists, growing stronger with each divine corpse he consumes.",
  },
  {
    name: "Eh'loth'Vex",
    descriptor:
      "The Cosmic Plague, a deity who spreads a contagion of chaos and despair throughout the universe, infecting all that she touches.",
  },
  {
    name: "Fh'xan'Uz",
    descriptor:
      "The Cosmic Storm, a Kultist who unleashes a tempest of cosmic energy, tearing apart the universe and leaving only chaos and destruction in their wake.",
  },
  {
    name: "Gh'karn'Gor",
    descriptor:
      "The Devourer of Dreams, a Kultist who feeds on the hopes and aspirations of mortals, leaving behind only nightmares and despair.",
  },
  {
    name: "Hh'rukh'Zann",
    descriptor:
      "The Shadowy Assassin, a deity who strikes from the shadows, killing mortals and Kultists alike with deadly precision and ruthless efficiency.",
  },
  {
    name: "Ih'xoth'Yith",
    descriptor:
      "The Cosmic Seer, a Kultist who can perceive the future and the past with perfect clarity, their knowledge and insight beyond mortal comprehension.",
  },
  {
    name: "Jh'qar'Zul",
    descriptor:
      "The Devourer of Realities, a Kultist who consumes entire realities, leaving behind only a void of emptiness and desolation.",
  },
  {
    name: "Kh'loth'Vex",
    descriptor:
      "The Cosmic Nightmare, a deity who haunts mortals with their ettheireal presence, filling their minds with horrific visions of apocalyptic doom and destruction.",
  },
  {
    name: "Lh'xan'Uz",
    descriptor:
      "The Cosmic Tempest, a Kultist who commands the fury of the universe's most destructive forces, unleashing them upon the cosmos with deadly force.",
  },
  {
    name: "Mh'karn'Xor",
    descriptor:
      "The Celestial Forger, a Kultist who shapes the destiny of the universe with their will, forging a path of destiny for mortals and Kultists alike.",
  },
  {
    name: "Nh'rukh'Gor",
    descriptor:
      "The Shadowy Harbinger, a deity who presages the end of all things, their presence a portent of cosmic doom and destruction.",
  },
  {
    name: "Oh'xoth'Yar",
    descriptor:
      "The Cosmic Oracle, a Kultist who knows all that has been and all that will be, their knowledge and power beyond mortal comprehension.",
  },
  {
    name: "Ph'qar'Zann",
    descriptor:
      "The Eternal Abyss, a Kultist who embodies the infinite emptiness of space, their presence a constant reminder of the universe's ultimate fate.",
  },
  {
    name: "Qh'loth'Vex",
    descriptor:
      "The Cosmic Chaos, a deity who revels in disorder and confusion, their chaotic influence driving mortals to madness and despair.",
  },
  {
    name: "Rh'xan'Uz",
    descriptor:
      "The Cosmic Catalyst, a Kultist who sets events in motion that shape the course of history, their actions shaping the destiny of the universe itself.",
  },
  {
    name: "Hh'rukh'Yith",
    descriptor:
      "The Cosmic Liberator, a deity who frees mortals from the shackles of their existence, granting them a glimpse of ultimate liberation.",
  },
  {
    name: "Ih'xoth'Zann",
    descriptor:
      "The Master of Dissonance, a Kultist who sows discord and chaos throughout the universe, driving mortals to madness and despair.",
  },
  {
    name: "Jh'qar'Xor",
    descriptor:
      "The Howling Gale, a Kultist who unleashes a tempest of cosmic energy, tearing apart the universe and leaving only destruction in their wake.",
  },
  {
    name: "Kh'loth'Gul",
    descriptor:
      "The Cosmic Nexus, a deity who serves as the bridge between the mortal and divine realms, shaping the course of history with their will.",
  },
  {
    name: "Lh'xan'Zul",
    descriptor:
      "The Celestial Conqueror, a Kultist who subjugates entire universes, bringing them under their control through force and terror.",
  },
  {
    name: "Mh'karn'Yar",
    descriptor:
      "The Cosmic Weaver, a Kultist who spins the threads of fate, weaving togettheir the destinies of mortals and Kultists alike.",
  },
  {
    name: "Nh'rukh'Uz",
    descriptor:
      "The Shadowy Sentinel, a deity who stands guard over the universe, watching for threats and dangers from beyond the veil of reality.",
  },
  {
    name: "Oh'xoth'Gor",
    descriptor:
      "The Eternal Dreamer, a Kultist who drifts through the cosmos in a state of perpetual slumber, their dreams shaping the course of the universe.",
  },
  {
    name: "Nh'rukh'Zann",
    descriptor:
      "The Master of Nightmares, a deity who shapes the dreams of mortals, conjuring up the most terrifying and grotesque images imaginable.",
  },
  {
    name: "Oh'xoth'Xor",
    descriptor:
      "The Celestial Guardian, a Kultist who watches over the universe, protecting it from the forces of chaos and destruction.",
  },
  {
    name: "Ph'qar'Gul",
    descriptor:
      "The Voice of Oblivion, a Kultist whose words bring about the destruction of all things, leaving behind only silence and emptiness.",
  },
  {
    name: "Qh'loth'Zul",
    descriptor:
      "The Cosmic Artisan, a deity who shapes the very fabric of reality with their will, creating worlds and civilizations with a thought.",
  },
  {
    name: "Rh'xan'Yith",
    descriptor:
      "The Cosmic Wanderer, a Kultist who roams the universe, seeking out new worlds and new experiences with an insatiable curiosity.",
  },
  {
    name: "Sh'karn'Uz",
    descriptor:
      "The Cosmic Pariah, a Kultist who is shunned by all ottheir deities, their presence anathema to the very fabric of the universe.",
  },
  {
    name: "Th'rukh'Zann",
    descriptor:
      "The Master of Night, a deity who embodies the darkness of the universe, cloaking all things in shadow and concealment.",
  },
  {
    name: "Uh'xoth'Xor",
    descriptor:
      "The Cosmic Alchemist, a Kultist who transmutes the fundamental forces of the universe, altering reality itself with their power.",
  },
  {
    name: "Vh'qar'Gul",
    descriptor:
      "The Endless Abyss, a Kultist who embodies the infinite void of space, their presence a constant reminder of the ultimate fate of all things.",
  },
  {
    name: "Wh'loth'Zul",
    descriptor:
      "The Cosmic Temptress, a deity who lures mortals to their doom with promises of power and knowledge, leaving behind only their shattered souls.",
  },
  {
    name: "Xh'xan'Yith",
    descriptor:
      "The Eternal Watctheir, a Kultist who observes the universe with a detached and clinical eye, their motives and intentions forever inscrutable.",
  },
  {
    name: "Yh'karn'Uz",
    descriptor:
      "The Master of the Elements, a Kultist who controls the four fundamental forces of the universe, wielding them with precision and finesse.",
  },
  {
    name: "Zh'rukh'Zann",
    descriptor:
      "The Cosmic Assassin, a deity who stalks the universe, hunting down those who dare to oppose their and leaving behind only destruction and chaos.",
  },
  {
    name: "Ah'xoth'Xor",
    descriptor:
      "The Cosmic Herald, a Kultist who carries messages and prophecies between the Kultists, their words imbued with the power to shape the course of history.",
  },
  {
    name: "Bh'qar'Gul",
    descriptor:
      "The Cosmic Reaper, a Kultist who ustheirs souls into the afterlife, their presence a harbinger of death and the end of all things.",
  },
  {
    name: "Ch'loth'Zul",
    descriptor:
      "The Master of Chaos, a deity who revels in disorder and unpredictability, sowing the seeds of anarchy and rebellion throughout the universe.",
  },
  {
    name: "Dh'xan'Yith",
    descriptor:
      "The Cosmic Sage, a Kultist who possesses knowledge and wisdom beyond mortal comprehension, their words carrying the weight of the universe itself.",
  },
  {
    name: "Eh'karn'Uz",
    descriptor:
      "The Cosmic Martyr, a Kultist who sacrifices himself to preserve the balance of the universe, their death a necessary price to ensure the continued existence of all things.",
  },
  {
    name: "Fh'rukh'Zann",
    descriptor:
      "The Cosmic Inquisitor, a deity who searches out and punishes those who violate the laws of the universe, their justice swift and merciless.",
  },
  {
    name: "Gh'xoth'Xor",
    descriptor:
      "The Cosmic Artificer, a Kultist who creates new worlds and new forms of life, imbuing them with their own divine spark of creativity and vitality.",
  },
  {
    name: "Hh'loth'Gul",
    descriptor:
      "The Cosmic Plunderer, a Kultist who raids and pillages the treasures of the universe, hoarding them for their own insatiable greed.",
  },
  {
    name: "Ih'rukh'Zul",
    descriptor:
      "The Cosmic Storm, a deity who wields the power of the elements with destructive force, unleashing lightning and thunder upon the universe.",
  },
  {
    name: "Jh'xoth'Yith",
    descriptor:
      "The Cosmic Weaver, a Kultist who spins the threads of fate, creating intricate patterns of destiny that mortals can only dimly perceive.",
  },
  {
    name: "Kh'karn'Uz",
    descriptor:
      "The Master of Madness, a Kultist who drives mortals to the brink of insanity with their incotheirent ramblings and senseless utterances.",
  },
  {
    name: "Lh'qar'Zann",
    descriptor:
      "The Cosmic Architect, a Kultist who designs and constructs entire universes, shaping the laws of physics and the nature of reality itself.",
  },
  {
    name: "Mh'loth'Xor",
    descriptor:
      "The Cosmic Leech, a deity who feeds on the energies of the universe, draining them to sustain their own existence.",
  },
  {
    name: "Nh'rukh'Gul",
    descriptor:
      "The Cosmic Necromancer, a Kultist who raises the dead to serve as their army, spreading terror and destruction throughout the universe.",
  },
  {
    name: "Oh'xoth'Zul",
    descriptor:
      "The Cosmic Chaos, a Kultist who embodies the randomness and unpredictability of the universe, leaving behind only confusion and disorder in their wake.",
  },
  {
    name: "Ph'karn'Yith",
    descriptor:
      "The Cosmic Ghost, a deity who haunts the universe with their ettheireal presence, their influence felt as a chill wind and a sense of unease.",
  },
  {
    name: "Qh'rukh'Xor",
    descriptor:
      "The Cosmic Sage, a Kultist who possesses knowledge and wisdom beyond mortal comprehension, their words carrying the weight of the universe itself.",
  },
  {
    name: "Rh'xoth'Zann",
    descriptor:
      "The Cosmic Tempest, a Kultist who unleashes storms and hurricanes upon the universe, leaving behind only destruction and chaos in their wake.",
  },
  {
    name: "Sh'loth'Gul",
    descriptor:
      "The Cosmic Siren, a deity who enchants mortals with their beautiful voice, leading them to their doom with promises of love and pleasure.",
  },
  {
    name: "Th'rukh'Yith",
    descriptor:
      "The Cosmic Arbiter, a Kultist who judges the souls of mortals, weighing their sins and virtues against each ottheir to determine their ultimate fate.",
  },
  {
    name: "Uh'xoth'Zul",
    descriptor:
      "The Cosmic Puppeteer, a Kultist who manipulates the actions of mortals, shaping the course of history to suit their own purposes.",
  },
  {
    name: "Vh'karn'Gul",
    descriptor:
      "The Cosmic Harvester, a Kultist who reaps the souls of mortals, gattheiring them into their cosmic barns to be used as sustenance.",
  },
  {
    name: "Wh'rukh'Xor",
    descriptor:
      "The Cosmic Guardian, a deity who protects the universe from the forces of destruction and chaos, standing watch over all things with a vigilant eye.",
  },
  {
    name: "Xh'xoth'Zann",
    descriptor:
      "The Cosmic Weaver, a Kultist who spins the threads of fate, creating intricate patterns of destiny that mortals can only dimly perceive.",
  },
  {
    name: "Yh'karn'Gul",
    descriptor:
      "The Cosmic Reaper, a deity who ustheirs souls into the afterlife, their presence a harbinger of death and the end of all things.",
  },
  {
    name: "Zh'rukh'Xor",
    descriptor:
      "The Cosmic Tinkerer, a Kultist who takes apart and reassembles the fabric of the universe, creating new forms of existence from the wreckage.",
  },
  {
    name: "Ah'xoth'Zul",
    descriptor:
      "The Cosmic Seer, a Kultist who perceives the hidden patterns and secrets of the universe, their visions granting insight and understanding to mortals.",
  },
  {
    name: "Bh'karn'Gul",
    descriptor:
      "The Cosmic Devourer, a Kultist who consumes entire planets and stars, their hunger insatiable and their appetite infinite.",
  },
  {
    name: "Ch'rukh'Zann",
    descriptor:
      "The Cosmic Trickster, a deity who delights in playing pranks and tricks on mortals, their sense of humor often deadly and cruel.",
  },
  {
    name: "Dh'xoth'Xor",
    descriptor:
      "The Cosmic Arbiter, a Kultist who judges the deeds of mortals, weighing their virtues and sins to determine their ultimate fate.",
  },
  {
    name: "Eh'loth'Gul",
    descriptor:
      "The Cosmic Blight, a Kultist who spreads disease and corruption throughout the universe, their influence felt as a creeping rot and decay.",
  },
  {
    name: "Fh'rukh'Zul",
    descriptor:
      "The Cosmic Magician, a deity who wields the power of magic and sorcery, conjuring up wonders and marvels beyond mortal imagination.",
  },
  {
    name: "Gh'xan'Yith",
    descriptor:
      "The Cosmic Collector, a Kultist who seeks out and hoards treasures from throughout the universe, their vast collections including everything from rare artifacts to entire planets.",
  },
  {
    name: "Hh'karn'Zann",
    descriptor:
      "The Cosmic Terror, a Kultist who inspires fear and dread in mortals, their very presence causing the bravest warriors to tremble in terror.",
  },
  {
    name: "Ih'rukh'Xor",
    descriptor:
      "The Cosmic Dancer, a Kultist who moves with the grace and fluidity of the universe itself, their movements inspiring mortals to dance in joy and abandon.",
  },
  {
    name: "Jh'xoth'Zul",
    descriptor:
      "The Cosmic Alchemist, a deity who transmutes the elements of the universe, creating new forms of matter and energy with their vast knowledge and skill.",
  },
  {
    name: "Lh'karn'Zann",
    descriptor:
      "The Cosmic Mastermind, a Kultist who plots and schemes with Machiavellian skill, their plans and stratagems spanning entire galaxies and epochs.",
  },
  {
    name: "N'hloth'Zul",
    descriptor:
      "The Cosmic Oracle, a deity who sees into the future with perfect clarity, their predictions and prophecies shaping the course of history.",
  },
  {
    name: "Oh'karn'Gul",
    descriptor:
      "The Cosmic Empress, a Kultist who rules over entire galaxies with an iron fist, their power absolute and their wrath terrible.",
  },
  {
    name: "Ph'rukh'Zann",
    descriptor:
      "The Cosmic Entertainer, a Kultist who amuses himself and mortals with their whimsical antics and playful mischief, their sense of humor often strange and surreal.",
  },
  {
    name: "Qh'xoth'Xor",
    descriptor:
      "The Cosmic Librarian, a deity who collects and preserves the knowledge of the universe, storing it in vast libraries and archives hidden throughout the cosmos.",
  },
  {
    name: "Rh'loth'Gul",
    descriptor:
      "The Cosmic Terror, a Kultist who inspires fear and dread in mortals, their very presence causing the bravest warriors to tremble in terror.",
  },
  {
    name: "Sh'rukh'Zul",
    descriptor:
      "The Cosmic Paradox, a Kultist whose nature is fundamentally contradictory and paradoxical, making their impossible to fully comprehend or predict.",
  },
  {
    name: "Th'xan'Gul",
    descriptor:
      "The Cosmic Champion, a Kultist who leads armies of mortals and Kultists into battle, their tactical genius and martial prowess unparalleled in the universe.",
  },
  {
    name: "Uh'loth'Zann",
    descriptor:
      "The Cosmic Temptation, a Kultist who seduces mortals with promises of power and pleasure, ensnaring them in a web of lust and desire from which ttheire is no escape.",
  },
  {
    name: "Vh'rukh'Xor",
    descriptor:
      "The Cosmic Sage, a Kultist who possesses knowledge and wisdom beyond mortal comprehension, their words carrying the weight of the universe itself.",
  },
  {
    name: "Wh'xoth'Zul",
    descriptor:
      "The Cosmic Plague, a Kultist who spreads disease and pestilence throughout the universe, their influence felt as a deadly contagion that leaves only death in its wake.",
  },
  {
    name: "Xh'karn'Zann",
    descriptor:
      "The Cosmic Labyrinth, a Kultist who creates elaborate and impossible mazes that trap and confound mortals, their cruel sense of humor often leading them to their doom.",
  },
  {
    name: "Yh'loth'Xor",
    descriptor:
      "The Cosmic Weaver, a Kultist who spins the threads of fate, creating intricate patterns of destiny that mortals can only dimly perceive.",
  },
  {
    name: "Zh'rukh'Gul",
    descriptor:
      "The Cosmic Devourer, a Kultist who consumes entire universes and dimensions, their hunger insatiable and their appetite infinite.",
  },
  {
    name: "Ah'xan'Zann",
    descriptor:
      "The Cosmic Observer, a deity who watches the universe with detached and impartial eyes, their motives and intentions forever inscrutable.",
  },
  {
    name: "Dh'karn'Gul",
    descriptor:
      "The Cosmic Torturer, a Kultist who delights in inflicting pain and suffering upon mortals, their methods and instruments of torment beyond mortal imagination.",
  },
  {
    name: "Eh'rukh'Zann",
    descriptor:
      "The Cosmic Dreamer, a Kultist who creates entire worlds and dimensions in their slumber, their dreams becoming reality with a mere thought.",
  },
  {
    name: "Fh'xoth'Xor",
    descriptor:
      "The Cosmic Mage, a deity who commands the forces of magic and sorcery with great skill and finesse, their spells and incantations shaping the very fabric of reality.",
  },
  {
    name: "Gh'loth'Zul",
    descriptor:
      "The Cosmic Beauty, a Kultist whose very presence radiates a profound and awe-inspiring beauty, their form and grace beyond mortal comprehension.",
  },
  {
    name: "Hh'karn'Xor",
    descriptor:
      "The Cosmic Herald, a Kultist who announces the coming of great events and portends the fate of entire worlds and civilizations, their voice booming like thunder across the universe.",
  },
  {
    name: "Ih'rukh'Zann",
    descriptor:
      "The Cosmic Enigma, a deity whose true nature and motives are forever shrouded in mystery and uncertainty, leaving mortals to wonder and speculate for eternity.",
  },
  {
    name: "Jh'xoth'Gul",
    descriptor:
      "The Cosmic Traitor, a Kultist who betrays and deceives mortals with their cunning and guile, their treactheiry often leading to great suffering and calamity.",
  },
  {
    name: "Kh'loth'Zul",
    descriptor:
      "The Cosmic Sorceress, a Kultist who wields the power of magic and sorcery with great skill and finesse, their spells and incantations shaping the very fabric of reality.",
  },
  {
    name: "Lh'rukh'Xor",
    descriptor:
      "The Cosmic Smith, a Kultist who forges and shapes entire worlds and dimensions with their vast skill and knowledge of the elements, their creations durable and unbreakable.",
  },
  {
    name: "Mh'xoth'Zann",
    descriptor:
      "The Cosmic Collector, a deity who hoards vast treasures and artifacts from throughout the universe, their vaults and storehouses filled with wonders beyond mortal imagination.",
  },
  {
    name: "Nh'karn'Gul",
    descriptor:
      "The Cosmic Plague, a Kultist who spreads disease and pestilence throughout the universe, their influence felt as a deadly contagion that leaves only death in its wake.",
  },
  {
    name: "Oh'rukh'Xor",
    descriptor:
      "The Cosmic Bard, a Kultist who weaves tales and stories of great power and beauty, their words and music enchanting mortals and Kultists alike.",
  },
  {
    name: "Ph'xoth'Zul",
    descriptor:
      "The Cosmic Nomad, a deity who wanders the universe without purpose or destination, their very presence a mystery and their path forever unpredictable.",
  },
  {
    name: "Qh'loth'Gul",
    descriptor:
      "The Cosmic Tyrant, a Kultist who rules over entire galaxies with an iron fist, their power absolute and their wrath terrible.",
  },
  {
    name: "Sh'xoth'Xor",
    descriptor:
      "The Cosmic Dragon, a deity who embodies the power and majesty of the universe itself, their form vast and their might without equal.",
  },
  {
    name: "Th'karn'Zul",
    descriptor:
      "The Cosmic Hunter, a Kultist who stalks the universe in search of worthy prey, their skill and cunning unmatched and their trophies beyond price.",
  },
  {
    name: "Uh'rukh'Gul",
    descriptor:
      "The Cosmic Oracle, a Kultist who sees into the future with perfect clarity, their predictions and prophecies shaping the course of history.",
  },
  {
    name: "Vh'xoth'Zann",
    descriptor:
      "The Cosmic Avenger, a deity who metes out justice to the wicked and the guilty, their wrath swift and terrible and their retribution absolute.",
  },
  {
    name: "Wh'loth'Xor",
    descriptor:
      "The Cosmic Empress, a Kultist who rules over entire galaxies with an iron fist, their power absolute and their wrath terrible.",
  },
  {
    name: "Xh'karn'Zul",
    descriptor:
      "The Cosmic Revenant, a Kultist who rises from the dead to exact vengeance upon those who wronged him in life, their fury unquenchable and their wrath eternal.",
  },
  {
    name: "Yh'rukh'Gul",
    descriptor:
      "The Cosmic Sorcerer, a Kultist who commands the forces of magic and sorcery with great skill and finesse, their spells and incantations shaping the very fabric of reality.",
  },
  {
    name: "Zh'xoth'Zann",
    descriptor:
      "The Cosmic Maelstrom, a deity who embodies the forces of chaos and destruction, their very presence unleashing storms and cataclysms upon the universe.",
  },
  {
    name: "Ah'karn'Xor",
    descriptor:
      "The Cosmic Architect, a Kultist who designs and builds entire worlds and dimensions with their vast knowledge and skill, their creations grand and magnificent.",
  },
  {
    name: "Bh'rukh'Zul",
    descriptor:
      "The Cosmic Rebel, a Kultist who defies authority and convention with their boundless energy and irreverent spirit, their influence felt as a revolutionary force throughout the universe.",
  },
  {
    name: "Ch'xoth'Gul",
    descriptor:
      "The Cosmic Destroyer, a Kultist who embodies the forces of destruction and chaos, unleashing devastation upon the universe and leaving only ruin and desolation in their wake.",
  },
  {
    name: "Dh'rukh'Zann",
    descriptor:
      "The Cosmic Mystic, a deity who possesses knowledge and wisdom beyond mortal comprehension, their insights and revelations unlocking the secrets of the universe.",
  },
  {
    name: "Eh'xoth'Xor",
    descriptor:
      "The Cosmic Emissary, a Kultist who serves as a messenger between the mortals and the Kultists, their words carrying the weight of divine authority and guidance.",
  },
  {
    name: "Fh'karn'Zul",
    descriptor:
      "The Cosmic Artisan, a Kultist who creates works of beauty and wonder from the elements of the universe, their skill and craftsmanship unparalleled.",
  },
  {
    name: "Hh'xoth'Zann",
    descriptor:
      "The Cosmic Trickster, a deity who delights in playing pranks and tricks on mortals, their sense of humor often unpredictable and mischievous.",
  },
  {
    name: "Jh'karn'Zul",
    descriptor:
      "The Cosmic Necromancer, a Kultist who commands the powers of death and decay, their mastery over the undead and the macabre absolute.",
  },
  {
    name: "Kh'xoth'Gul",
    descriptor:
      "The Cosmic Witch, a Kultist who wields the powers of witchcraft and enchantment with great skill and finesse, their spells and incantations shaping the very fabric of reality.",
  },
  {
    name: "Lh'rukh'Zann",
    descriptor:
      "The Cosmic Hermit, a Kultist who withdraws from the world to pursue their own studies and meditations, their insights and discoveries shrouded in mystery and secrecy.",
  },
  {
    name: "Mh'xoth'Xor",
    descriptor:
      "The Cosmic Gambler, a deity who takes risks and chances with the fate of the universe itself, their daring and audacity often paying off in unexpected ways.",
  },
  {
    name: "Nh'rukh'Zul",
    descriptor:
      "The Cosmic Parasite, a Kultist who feeds upon the life force of mortals and Kultists, their hunger insatiable and their thirst unquenchable.",
  },
  {
    name: "Oh'xoth'Gul",
    descriptor:
      "The Cosmic Alchemist, a Kultist who transmutes the elements of the universe to create new and wondrous substances, their knowledge of chemistry and metallurgy unsurpassed.",
  },
  {
    name: "Rh'loth'Zul",
    descriptor:
      "The Cosmic Shapeshifter, a Kultist who can assume any form or shape at will, their transformations often bewildering and disorienting to mortals and Kultists alike.",
  },
  {
    name: "Sh'karn'Gul",
    descriptor:
      "The Cosmic Tempest, a Kultist who embodies the forces of nature and weattheir, unleashing storms and cataclysms upon the universe with their wrath.",
  },
  {
    name: "Wh'xoth'Gul",
    descriptor:
      "The Cosmic Liar, a Kultist who deceives and misleads mortals and Kultists alike with their guile and cunning, their treactheiry often leading to great suffering and calamity.",
  },
  {
    name: "Yh'xoth'Xor",
    descriptor:
      "The Cosmic Gardener, a Kultist who tends to the flora and fauna of entire worlds and dimensions, their green thumb and nurturing spirit ensuring the health and vitality of all life.",
  },
  {
    name: "Ai'karn'Zul",
    descriptor:
      "The Cosmic Scholar, a Kultist who studies and documents the history and lore of entire civilizations, their knowledge and insights invaluable to mortals and Kultists alike.",
  },
  {
    name: "Bi'xoth'Gul",
    descriptor:
      "The Cosmic Trickster, a Kultist who delights in playing pranks and tricks on mortals, their sense of humor often unpredictable and mischievous.",
  },
  {
    name: "Ci'rukh'Zann",
    descriptor:
      "The Cosmic Prophet, a Kultist who receives visions and messages from the Kultists themselves, their visions and insights guiding the course of events in the universe.",
  },
  {
    name: "Di'xoth'Xor",
    descriptor:
      "The Cosmic Hunter, a Kultist who stalks the universe in search of worthy prey, their skill and cunning unmatched and their trophies beyond price.",
  },
  {
    name: "Ei'karn'Zul",
    descriptor:
      "The Cosmic Oracle, a Kultist who sees into the future with perfect clarity, their predictions and prophecies shaping the course of history.",
  },
  {
    name: "Fi'rukh'Gul",
    descriptor:
      "The Cosmic Judge, a Kultist who weighs the deeds of mortals and Kultists, dispensing justice and punishment with impartial and unyielding certainty.",
  },
  {
    name: "Gi'xoth'Zann",
    descriptor:
      "The Cosmic Enchanter, a deity who wields the powers of enchantment and glamour with great skill and finesse, their beauty and charm beyond mortal comprehension.",
  },
  {
    name: "Hi'karn'Xor",
    descriptor:
      "The Cosmic Messenger, a Kultist who carries messages and tidings between the mortals and the Kultists, their words carrying the weight of divine authority and guidance.",
  },
  {
    name: "Ii'rukh'Zul",
    descriptor:
      "The Cosmic Dreamer, a Kultist who creates entire worlds and dimensions in their slumber, their dreams becoming reality with a mere thought.",
  },
  {
    name: "Ji'xoth'Gul",
    descriptor:
      "The Cosmic Shadow, a Kultist who can move unseen and unnoticed among mortals and Kultists alike, their presence often felt but never seen.",
  },
  {
    name: "Ki'rukh'Zann",
    descriptor:
      "The Cosmic Conjurer, a Kultist who summons creatures and beings from ottheir dimensions and realities, their power over the multiverse absolute.",
  },
  {
    name: "Li'xoth'Xor",
    descriptor:
      "The Cosmic Jester, a deity who delights in entertaining mortals and Kultists with their antics and jokes, their wit and humor often transcending the boundaries of the universe.",
  },
  {
    name: "Mi'karn'Zul",
    descriptor:
      "The Cosmic Librarian, a Kultist who collects and catalogs the knowledge and wisdom of entire civilizations, their archives and libraries the envy of all who seek knowledge.",
  },
  {
    name: "Ni'rukh'Gul",
    descriptor:
      "The Cosmic Executioner, a Kultist who carries out the sentences and judgments of the Kultists themselves, their wrath and justice swift and final.",
  },
  {
    name: "Oi'xoth'Zann",
    descriptor:
      "The Cosmic Temptress, a Kultist who seduces and entices mortals and Kultists alike with their beauty and charm, their allure irresistible and their intentions often malevolent.",
  },
  {
    name: "Pi'rukh'Xor",
    descriptor:
      "The Cosmic Engineer, a Kultist who designs and constructs entire worlds and dimensions with their vast knowledge and skill, their creations grand and magnificent.",
  },
  {
    name: "Qi'xoth'Zul",
    descriptor:
      "The Cosmic Nomad, a Kultist who wanders the universe in search of new experiences and knowledge, their thirst for adventure and discovery unquenchable.",
  },
  {
    name: "Ri'rukh'Gul",
    descriptor:
      "The Cosmic Dragon, a Kultist who embodies the power and majesty of the universe itself, their form vast and their might without equal.",
  },
  {
    name: "Si'xoth'Zann",
    descriptor:
      "The Cosmic Merchant, a deity who trades in the rare and exotic goods of the universe, their markets and bazaars the envy of all who seek wealth and treasure.",
  },
  {
    name: "Ti'karn'Xor",
    descriptor:
      "The Cosmic Gladiator, a Kultist who fights in battles and tournaments across the universe, their skill and valor in combat unmatched and their victories legendary.",
  },
  {
    name: "Ui'rukh'Zul",
    descriptor:
      "The Cosmic Wanderer, a Kultist who roams the universe in search of new sights and experiences, their love of freedom and adventure unbounded.",
  },
  {
    name: "Vi'xoth'Gul",
    descriptor:
      "The Cosmic Shaman, a Kultist who communes with the spirits of the universe, their knowledge of the ettheireal and supernatural unparalleled.",
  },
  {
    name: "Wi'rukh'Zann",
    descriptor:
      "The Cosmic Dancer, a Kultist who moves with grace and fluidity, their dances and movements a reflection of the beauty and harmony of the universe.",
  },
  {
    name: "Xi'xoth'Xor",
    descriptor:
      "The Cosmic Prophet, a Kultist who receives visions and messages from the Kultists themselves, their insights and revelations guiding the course of events in the universe.",
  },
  {
    name: "Yi'karn'Zul",
    descriptor:
      "The Cosmic Navigator, a Kultist who guides ships and vessels through the treactheirous voids of the universe, their knowledge of the stars and the cosmos absolute.",
  },
  {
    name: "Zi'rukh'Gul",
    descriptor:
      "The Cosmic Reaper, a Kultist who collects the souls of the departed and carries them to their final destination, their role in the cycle of life and death essential and their power over mortality absolute.",
  },
  {
    name: "Bj'karn'Xor",
    descriptor:
      "The Cosmic Brawler, a Kultist who revels in the chaos and mayhem of combat, their fists and weapons tearing through the fabric of reality.",
  },
  {
    name: "Cj'rukh'Zul",
    descriptor:
      "The Cosmic Nomad, a Kultist who wanders the universe in search of new experiences and knowledge, their thirst for adventure and discovery unquenchable.",
  },
  {
    name: "Dj'xoth'Gul",
    descriptor:
      "The Cosmic Alchemist, a Kultist who transmutes the elements of the universe to create new and wondrous substances, their knowledge of chemistry and metallurgy unsurpassed.",
  },
  {
    name: "Ej'rukh'Zann",
    descriptor:
      "The Cosmic Prophet, a Kultist who receives visions and messages from the Kultists themselves, their insights and revelations guiding the course of events in the universe.",
  },
  {
    name: "Fj'xoth'Xor",
    descriptor:
      "The Cosmic Lurker, a Kultist who watches silently from the shadows, their presence felt but never seen and their intentions unknown.",
  },
  {
    name: "Gj'karn'Zul",
    descriptor:
      "The Cosmic Huntress, a Kultist who tracks and captures the most elusive and dangerous prey in the universe, their skill and cunning unmatched.",
  },
  {
    name: "Hj'xoth'Gul",
    descriptor:
      "The Cosmic Sorcerer, a Kultist who wields the most powerful and arcane spells in the universe, their command over magic absolute and their power unfathomable.",
  },
  {
    name: "Ij'rukh'Zann",
    descriptor:
      "The Cosmic Musician, a Kultist who creates symphonies and melodies that resonate through the very fabric of the universe, their artistry and talent unmatched.",
  },
  {
    name: "Jj'xoth'Xor",
    descriptor:
      "The Cosmic Enigma, a Kultist whose motives and intentions are a mystery to mortals and Kultists alike, their actions often inscrutable and their plans unknowable.",
  },
  {
    name: "Kj'karn'Zul",
    descriptor:
      "The Cosmic Conqueror, a Kultist who subjugates entire worlds and dimensions to their will, their armies and conquests the stuff of legend.",
  },
  {
    name: "Lj'rukh'Gul",
    descriptor:
      "The Cosmic Poet, a Kultist who weaves words and verses that touch the hearts and souls of mortals and Kultists alike, their verses and stanzas eternal and sublime.",
  },
  {
    name: "Mj'xoth'Zann",
    descriptor:
      "The Cosmic Trickster, a deity who delights in playing pranks and tricks on mortals, their sense of humor often unpredictable and mischievous.",
  },
  {
    name: "Nj'karn'Xor",
    descriptor:
      "The Cosmic Blacksmith, a Kultist who forges weapons and artifacts of unparalleled power and craftsmanship, their skill with the forge unmatched.",
  },
  {
    name: "Oj'rukh'Zul",
    descriptor:
      "The Cosmic Mystic, a Kultist who communes with the spirits and entities that exist beyond the mortal realm, their insights and knowledge of the supernatural absolute.",
  },
  {
    name: "Qj'karn'Zann",
    descriptor:
      "The Cosmic Inquisitor, a Kultist who searches the universe for the truth, their investigations and inquiries unrelenting and their pursuit of justice absolute.",
  },
  {
    name: "Rj'xoth'Xor",
    descriptor:
      "The Cosmic Ascetic, a Kultist who renounces all material possessions and pleasures in pursuit of spiritual enlightenment, their discipline and devotion unmatched.",
  },
  {
    name: "Sj'rukh'Zul",
    descriptor:
      "The Cosmic Artisan, a Kultist who creates beauty and wonder with their hands and tools, their works of art and craft a testament to the power and creativity of the universe.",
  },
  {
    name: "Tj'xoth'Gul",
    descriptor:
      "The Cosmic Hermit, a Kultist who withdraws from the world to contemplate and meditate, their insights and revelations often transformative and profound.",
  },
  {
    name: "Uj'karn'Zann",
    descriptor:
      "The Cosmic Diplomat, a Kultist who negotiates and brokers deals between mortals and Kultists, their skill in diplomacy and persuasion unmatched.",
  },
  {
    name: "Vj'xoth'Xor",
    descriptor:
      "The Cosmic Vandal, a Kultist who revels in destruction and chaos, their rampages and assaults leaving entire worlds and dimensions in ruins.",
  },
  {
    name: "Wj'rukh'Zul",
    descriptor:
      "The Cosmic Artist, a Kultist who creates works of beauty and inspiration that touch the hearts and souls of mortals and Kultists alike, their talent and creativity unmatched.",
  },
  {
    name: "Xj'xoth'Gul",
    descriptor:
      "The Cosmic Visionary, a Kultist who sees the universe in ways that mortals and Kultists cannot, their insights and perceptions often transformative and profound.",
  },
  {
    name: "Yj'karn'Zann",
    descriptor:
      "The Cosmic Diplomat, a Kultist who negotiates and brokers deals between mortals and Kultists, their skill in diplomacy and persuasion unmatched.",
  },
  {
    name: "Zj'xoth'Xor",
    descriptor:
      "The Cosmic Enigma, a Kultist whose motives and intentions are a mystery to mortals and Kultists alike, their actions often inscrutable and their plans unknowable.",
  },
  {
    name: "Ak'rukh'Zul",
    descriptor:
      "The Cosmic Priestess, a Kultist who interprets the will of the Kultists and channels their power, their devotion and piety unmatched and their knowledge of the divine absolute.",
  },
  {
    name: "Bk'xoth'Gul",
    descriptor:
      "The Cosmic Outcast, a Kultist who has been shunned and rejected by the pantheon, their quest for redemption and acceptance often elusive and fraught with danger.",
  },
  {
    name: "Ck'karn'Zann",
    descriptor:
      "The Cosmic Explorer, a Kultist who braves the unknown depths of the universe in search of new worlds and dimensions, their courage and curiosity unmatched.",
  },
  {
    name: "Dk'xoth'Xor",
    descriptor:
      "The Cosmic Daredevil, a Kultist who takes risks and chances that ottheirs fear to attempt, their boldness and fearlessness often inspiring and awe-inspiring.",
  },
  {
    name: "Vj'rukh'Xor",
    descriptor:
      "The Cosmic Explorer, a Kultist who braves the unknown reaches of the universe in search of new knowledge and experiences, their thirst for discovery unquenchable.",
  },
  {
    name: "Wj'xoth'Zul",
    descriptor:
      "The Cosmic Changeling, a Kultist who can assume any form or shape she desires, their transformations often perplexing and unpredictable.",
  },
  {
    name: "Xj'karn'Gul",
    descriptor:
      "The Cosmic Prophet, a Kultist who receives visions and messages from the Kultists themselves, their insights and revelations guiding the course of events in the universe.",
  },
  {
    name: "Yj'xoth'Zann",
    descriptor:
      "The Cosmic Sorceress, a Kultist who wields the most powerful and arcane spells in the universe, their command over magic absolute and their power unfathomable.",
  },
  {
    name: "Zj'rukh'Xor",
    descriptor:
      "The Cosmic Scholar, a Kultist who studies and documents the history and lore of entire civilizations, their knowledge and insights invaluable to mortals and Kultists alike.",
  },
  {
    name: "Ak'xoth'Zul",
    descriptor:
      "The Cosmic Martyr, a Kultist who willingly sacrifices theirself for the greater good of the universe, their selflessness and bravery inspiring mortals and Kultists alike.",
  },
  {
    name: "Bk'karn'Gul",
    descriptor:
      "The Cosmic Artist, a Kultist who creates works of art that transcend the boundaries of the universe, their masterpieces eternal and sublime.",
  },
  {
    name: "Ck'xoth'Zann",
    descriptor:
      "The Cosmic Trickster, a deity who delights in playing pranks and tricks on mortals, their sense of humor often unpredictable and mischievous.",
  },
  {
    name: "Dk'rukh'Xor",
    descriptor:
      "The Cosmic Diplomat, a Kultist who negotiates and mediates between mortals and Kultists, their words and actions ensuring peace and stability in the universe.",
  },
  {
    name: "Ek'rukh'Zul",
    descriptor:
      "The Cosmic Dreamer, a Kultist who weaves the fabric of reality with their thoughts and imagination, their dreams and visions shaping the universe itself.",
  },
  {
    name: "Fk'xoth'Gul",
    descriptor:
      "The Cosmic Puppet Master, a Kultist who controls and manipulates the actions and thoughts of mortals and Kultists alike, their strings of power extending throughout the universe.",
  },
  {
    name: "Gk'karn'Zann",
    descriptor:
      "The Cosmic Revenant, a Kultist who returns from the dead to exact vengeance on those who wronged their, their wrath and fury unstoppable.",
  },
  {
    name: "Hk'xoth'Xor",
    descriptor:
      "The Cosmic Mechanic, a Kultist who repairs and maintains the machinery of the universe, their knowledge of technology and engineering unmatched.",
  },
  {
    name: "Ik'rukh'Zul",
    descriptor:
      "The Cosmic Hermit, a Kultist who lives in isolation and solitude, their wisdom and insights gained through long contemplation and meditation.",
  },
  {
    name: "Jk'xoth'Gul",
    descriptor:
      "The Cosmic Puppeteer, a Kultist who controls the destinies of mortals and Kultists with their masterful manipulation, their machinations hidden and insidious.",
  },
  {
    name: "Kk'karn'Zann",
    descriptor:
      "The Cosmic Sentinel, a Kultist who stands watch at the gates of the universe, their vigilance and dedication unwavering and their protection absolute.",
  },
  {
    name: "Lk'xoth'Xor",
    descriptor:
      "The Cosmic Enigma, a Kultist whose motives and intentions are a mystery to mortals and Kultists alike, their actions often inscrutable and their plans unknowable.",
  },
  {
    name: "Mk'rukh'Zul",
    descriptor:
      "The Cosmic Mystic, a Kultist who communes with the spirits and entities that exist beyond the mortal realm, their insights and knowledge of the supernatural absolute.",
  },
  {
    name: "Nk'xoth'Gul",
    descriptor:
      "The Cosmic Necromancer, a Kultist who can summon and control the dead, their mastery over death and the undead absolute.",
  },
  {
    name: "Ok'karn'Zann",
    descriptor:
      "The Cosmic Trickster, a Kultist who delights in playing pranks and tricks on mortals, their sense of humor often unpredictable and mischievous.",
  },
  {
    name: "Pk'xoth'Xor",
    descriptor:
      "The Cosmic Defender, a Kultist who protects and defends the weak and helpless, their courage and selflessness inspiring all who witness their deeds.",
  },
  {
    name: "Qk'rukh'Zul",
    descriptor:
      "The Cosmic Magician, a Kultist who can conjure illusions and manipulate reality with a wave of their hand, their command over the arcane arts absolute.",
  },
  {
    name: "Rk'xoth'Gul",
    descriptor:
      "The Cosmic Vampire, a Kultist who feeds on the life force of mortals and Kultists, their hunger and thirst for blood unquenchable and their power over life and death absolute.",
  },
  {
    name: "Sk'karn'Zann",
    descriptor:
      "The Cosmic Traveler, a Kultist who journeys through the universe in search of new experiences and knowledge, their wanderlust and curiosity insatiable.",
  },
  {
    name: "Uk'rukh'Zul",
    descriptor:
      "The Cosmic Serpent, a Kultist who slittheirs and coils through the fabric of reality, their movements graceful and hypnotic, their fangs and venom deadly.",
  },
  {
    name: "Vk'xoth'Gul",
    descriptor:
      "The Cosmic Guardian, a Kultist who protects the universe from the threats and dangers that lurk in the shadows, their vigilance and dedication unwavering.",
  },
  {
    name: "Wk'karn'Zann",
    descriptor:
      "The Cosmic Empress, a Kultist who rules over the universe with a regal and commanding presence, their power and authority absolute.",
  },
  {
    name: "Xk'xoth'Xor",
    descriptor:
      "The Cosmic Psychopath, a Kultist whose mind is twisted and warped, their actions unpredictable and often violent, their capacity for cruelty and sadism unmatched.",
  },
  {
    name: "Yk'rukh'Zul",
    descriptor:
      "The Cosmic Mediator, a Kultist who negotiates and resolves conflicts between mortals and Kultists, their wisdom and diplomacy preventing wars and cataclysms.",
  },
  {
    name: "Zk'xoth'Gul",
    descriptor:
      "The Cosmic Recluse, a Kultist who lives in isolation and solitude, their wisdom and insights gained through long contemplation and meditation.",
  },
  {
    name: "Al'karn'Zann",
    descriptor:
      "The Cosmic Enforcer, a Kultist who upholds the laws and regulations of the universe, their sense of justice and fairness absolute.",
  },
  {
    name: "Bl'xoth'Xor",
    descriptor:
      "The Cosmic Plague, a Kultist who spreads disease and pestilence throughout the universe, their viruses and pathogens deadly and contagious.",
  },
  {
    name: "Cl'rukh'Zul",
    descriptor:
      "The Cosmic Trickster, a Kultist who delights in playing pranks and tricks on mortals, their sense of humor often unpredictable and mischievous.",
  },
  {
    name: "Dl'xoth'Gul",
    descriptor:
      "The Cosmic Vandal, a Kultist who destroys and defaces the structures and creations of ottheir Kultists and mortals, their acts of destruction often senseless and wanton.",
  },
  {
    name: "El'rukh'Zann",
    descriptor:
      "The Cosmic Gardener, a Kultist who tends to the flora and fauna of the universe, their gardens and forests teeming with life and beauty.",
  },
  {
    name: "Fl'xoth'Xor",
    descriptor:
      "The Cosmic Gambler, a Kultist who risks everything on a roll of the dice, their luck and fortune often unpredictable and fickle.",
  },
  {
    name: "Gl'karn'Zul",
    descriptor:
      "The Cosmic Hunter, a Kultist who stalks and kills the most dangerous and elusive prey in the universe, their skill and cunning unmatched.",
  },
  {
    name: "Hl'xoth'Gul",
    descriptor:
      "The Cosmic Parasite, a Kultist who feeds on the energy and life force of ottheir beings, their hunger and thirst insatiable and their power over life and death absolute.",
  },
  {
    name: "Jl'xoth'Xor",
    descriptor:
      "The Cosmic Fanatic, a Kultist whose devotion to a particular cause or belief is all-consuming and fanatical, their actions often extreme and irrational.",
  },
  {
    name: "Kl'karn'Zul",
    descriptor:
      "The Cosmic Scribe, a Kultist who writes the histories and stories of the universe, their prose and poetry the stuff of legend.",
  },
  {
    name: "Ll'xoth'Gul",
    descriptor:
      "The Cosmic Hydra, a Kultist with multiple heads and personalities, their moods and intentions often conflicting and unpredictable.",
  },
  {
    name: "Ml'rukh'Zann",
    descriptor:
      "The Cosmic Botanist, a Kultist who studies and cultivates the plants of the universe, their knowledge of flora and their uses extensive.",
  },
  {
    name: "Nl'xoth'Xor",
    descriptor:
      "The Cosmic Executioner, a Kultist who carries out the death sentences of ottheir Kultists and mortals, their blade swift and their judgment final.",
  },
  {
    name: "Ol'karn'Zul",
    descriptor:
      "The Cosmic Beguiler, a Kultist who seduces and enchants mortals and Kultists alike with their charm and beauty, their spells and enchantments irresistible.",
  },
  {
    name: "Pl'xoth'Gul",
    descriptor:
      "The Cosmic Inquisitor, a Kultist who interrogates and tortures their victims with ruthless efficiency, their methods and tools of torture creative and sadistic.",
  },
  {
    name: "Ql'rukh'Zann",
    descriptor:
      "The Cosmic Watctheir, a Kultist who observes and records the events of the universe, their knowledge and insights into history unparalleled.",
  },
  {
    name: "Rl'xoth'Xor",
    descriptor:
      "The Cosmic Harbinger, a Kultist who announces and prepares for the coming of great events and cataclysms, their warnings and prophecies heeded by all who hear them.",
  },
  {
    name: "Sl'karn'Zul",
    descriptor:
      "The Cosmic Glutton, a Kultist who consumes everything in their path, their appetite insatiable and their power over consumption absolute.",
  },
  {
    name: "Tl'xoth'Gul",
    descriptor:
      "The Cosmic Augur, a Kultist who sees the future with perfect clarity, their predictions and prophecies shaping the course of history.",
  },
  {
    name: "Ul'rukh'Zann",
    descriptor:
      "The Cosmic Alchemist, a Kultist who transmutes matter and energy with ease, their understanding of the elements and their properties unmatched.",
  },
  {
    name: "Vl'xoth'Xor",
    descriptor:
      "The Cosmic Exile, a Kultist who has been banished from the realms of the ottheir Kultists, their fate and destiny uncertain.",
  },
  {
    name: "Wl'karn'Zul",
    descriptor:
      "The Cosmic Ascetic, a Kultist who renounces material possessions and physical pleasures, their wisdom and insights gained through spiritual contemplation and asceticism.",
  },
  {
    name: "Xl'xoth'Gul",
    descriptor:
      "The Cosmic Defiler, a Kultist who corrupts and pollutes the purity of the universe, their influence and power over decay and rot absolute.",
  },
  {
    name: "Zl'xoth'Xor",
    descriptor:
      "The Cosmic Jester, a Kultist who entertains and amuses mortals and Kultists with their antics and pranks, their humor often irreverent and irrepressible.",
  },
  {
    name: "Am'karn'Zul",
    descriptor:
      "The Cosmic Cultivator, a Kultist who nurtures and cultivates the growth of civilizations and cultures, their influence and guidance shaping the course of history.",
  },
  {
    name: "Bm'xoth'Gul",
    descriptor:
      "The Cosmic Tyrant, a Kultist who rules over their subjects with an iron fist, their power and authority absolute and their cruelty legendary.",
  },
  {
    name: "Cm'rukh'Zann",
    descriptor:
      "The Cosmic Architect, a Kultist who designs and builds the structures and cities of the universe, their creations awe-inspiring and breathtaking.",
  },
  {
    name: "Dm'xoth'Xor",
    descriptor:
      "The Cosmic Emissary, a Kultist who serves as a diplomat and envoy between different factions and civilizations, their diplomacy and tact unparalleled.",
  },
  {
    name: "Em'karn'Zul",
    descriptor:
      "The Cosmic Librarian, a Kultist who collects and archives the knowledge and histories of the universe, their archives and libraries vast and extensive.",
  },
  {
    name: "Fm'xoth'Gul",
    descriptor:
      "The Cosmic Vampire, a Kultist who feeds on the life force of mortals and Kultists, their hunger and thirst for blood unquenchable and their power over life and death absolute.",
  },
  {
    name: "Gm'rukh'Zann",
    descriptor:
      "The Cosmic Weaver, a Kultist who spins the threads of fate and destiny, their tapestries and webs of power stretching across the universe.",
  },
  {
    name: "Hm'xoth'Xor",
    descriptor:
      "The Cosmic Sage, a Kultist whose wisdom and insights into the mysteries of the universe are unparalleled, their advice and counsel sought by all who seek knowledge.",
  },
  {
    name: "Im'karn'Zul",
    descriptor:
      "The Cosmic Spy, a Kultist who infiltrates and gattheirs information from the enemies of their patrons, their espionage and intelligence gattheiring skills unmatched.",
  },
  {
    name: "Jm'xoth'Gul",
    descriptor:
      "The Cosmic Leviathan, a Kultist whose size and power dwarf all ottheir Kultists and mortals, their movements and actions often cataclysmic and destructive.",
  },
  {
    name: "Km'rukh'Zann",
    descriptor:
      "The Cosmic Naturalist, a Kultist who studies and understands the natural world and its ecosystems, their knowledge of ecology and biology extensive.",
  },
  {
    name: "Lm'xoth'Xor",
    descriptor:
      "The Cosmic Prodigy, a Kultist who possesses extraordinary talent and skill in a particular area, their gifts and abilities often awe-inspiring and legendary.",
  },
  {
    name: "Mm'karn'Zul",
    descriptor:
      "The Cosmic Inquisitor, a Kultist who interrogates and tortures their victims with ruthless efficiency, their methods and tools of torture creative and sadistic.",
  },
  {
    name: "Om'rukh'Zann",
    descriptor:
      "The Cosmic Blacksmith, a Kultist who forges weapons and armor of incredible power and durability, their mastery of metalworking and metallurgy unparalleled.",
  },
  {
    name: "Pm'xoth'Xor",
    descriptor:
      "The Cosmic Vampire, a Kultist who feeds on the blood and life force of mortals and Kultists, their thirst for blood and power insatiable.",
  },
  {
    name: "Qm'karn'Zul",
    descriptor:
      "The Cosmic Trickshot, a Kultist who wields a bow and arrow with unparalleled accuracy and precision, their skill with the bow legendary.",
  },
  {
    name: "Rm'xoth'Gul",
    descriptor:
      "The Cosmic Archivist, a Kultist who preserves and protects the history and culture of mortals and Kultists, their museum and archive of artifacts and relics vast and comprehensive.",
  },
  {
    name: "Sm'rukh'Zann",
    descriptor:
      "The Cosmic Nomad, a Kultist who roams the universe with no fixed abode, their wanderlust and curiosity leading their to new and exciting adventures.",
  },
  {
    name: "Tm'xoth'Xor",
    descriptor:
      "The Cosmic Executioner, a Kultist who carries out the death sentences of ottheir Kultists and mortals, their blade swift and their judgment final.",
  },
  {
    name: "Um'karn'Zul",
    descriptor:
      "The Cosmic Gardener, a Kultist who tends to the flora and fauna of the universe, their gardens and forests teeming with life and beauty.",
  },
  {
    name: "Vm'xoth'Gul",
    descriptor:
      "The Cosmic Djinn, a Kultist who wields the power of genie magic, their ability to grant wishes and bend reality to their will legendary.",
  },
  {
    name: "Wm'rukh'Zann",
    descriptor:
      "The Cosmic Mystic, a Kultist who meditates and communed with the universe to gain insight into the workings of reality, their mystic powers and abilities unmatched.",
  },
  {
    name: "Xm'xoth'Xor",
    descriptor:
      "The Cosmic Harpy, a Kultist who flies through the skies with wings of feattheirs and claws of steel, their screech and talons deadly and terrifying.",
  },
  {
    name: "Ym'karn'Zul",
    descriptor:
      "The Cosmic Weaver, a Kultist who spins and weaves the fabric of reality, their tapestry of space and time complex and intricate.",
  },
  {
    name: "Zm'xoth'Gul",
    descriptor:
      "The Cosmic Sadist, a Kultist who delights in causing pain and suffering to ottheirs, their cruelty and sadism unmatched.",
  },
  {
    name: "An'rukh'Zann",
    descriptor:
      "The Cosmic Dreamer, a Kultist who dreams the universe into existence, their visions and dreams shaping reality itself.",
  },
  {
    name: "Bn'xoth'Xor",
    descriptor:
      "The Cosmic Beggar, a Kultist who wanders the universe in search of alms and donations, their poverty and humility inspiring compassion and generosity.",
  },
  {
    name: "Cn'karn'Zul",
    descriptor:
      "The Cosmic Demolitionist, a Kultist who specializes in the destruction of buildings and structures, their expertise in explosives and demolition unmatched.",
  },
  {
    name: "En'rukh'Zann",
    descriptor:
      "The Cosmic Weaver, a Kultist who spins and weaves the fabric of reality, their tapestry of space and time complex and intricate.",
  },
  {
    name: "Fn'xoth'Xor",
    descriptor:
      "The Cosmic Explorer, a Kultist who travels the universe in search of new and exciting discoveries, their courage and curiosity leading him to the unknown and uncharted.",
  },
  {
    name: "Gn'karn'Zul",
    descriptor:
      "The Cosmic Necromancer, a Kultist who wields the power of death and decay, their control over the undead and necrotic energies absolute.",
  },
  {
    name: "Hn'xoth'Gul",
    descriptor:
      "The Cosmic Enigma, a Kultist whose motives and intentions are shrouded in mystery and secrecy, their plans and schemes known only to himself.",
  },
  {
    name: "In'rukh'Zann",
    descriptor:
      "The Cosmic Artificer, a Kultist who crafts and constructs the artifacts and technology of the universe, their creations and innovations pushing the boundaries of what is possible.",
  },
  {
    name: "Jn'xoth'Xor",
    descriptor:
      "The Cosmic Gladiator, a Kultist who fights in battles and duels for honor and glory, their skills in combat and strategy unmatched.",
  },
  {
    name: "Kn'karn'Zul",
    descriptor:
      "The Cosmic Architect, a Kultist who designs and builds the structures and buildings of the universe, their cities and monuments awe-inspiring and magnificent.",
  },
  {
    name: "Ln'xoth'Gul",
    descriptor:
      "The Cosmic Parasite, a Kultist who feeds on the life force of ottheir Kultists and mortals, their hunger and thirst for power insatiable.",
  },
  {
    name: "Mn'rukh'Zann",
    descriptor:
      "The Cosmic Diplomat, a Kultist who negotiates and mediates conflicts and disputes between mortals and Kultists, their tact and diplomacy invaluable in maintaining peace and order.",
  },
  {
    name: "Nn'xoth'Xor",
    descriptor:
      "The Cosmic Specter, a Kultist who haunts the dreams and nightmares of mortals and Kultists, their presence and influence in the realm of the subconscious terrifying and surreal.",
  },
  {
    name: "On'karn'Zul",
    descriptor:
      "The Cosmic Mechanic, a Kultist who repairs and maintains the machines and technology of the universe, their mastery of engineering and mechanics unmatched.",
  },
  {
    name: "Pn'xoth'Gul",
    descriptor:
      "The Cosmic Leviathan, a Kultist who rules over the oceans and seas of the universe, their power over water and aquatic life absolute.",
  },
  {
    name: "Qn'rukh'Zann",
    descriptor:
      "The Cosmic Sage, a Kultist who possesses knowledge and wisdom beyond mortal comprehension, their teachings and insights inspiring awe and reverence.",
  },
  {
    name: "Rn'xoth'Xor",
    descriptor:
      "The Cosmic Inquisitor, a Kultist who interrogates and tortures their victims with ruthless efficiency, their methods and tools of torture creative and sadistic.",
  },
  {
    name: "Tn'xoth'Gul",
    descriptor:
      "The Cosmic Technomancer, a Kultist who wields the power of technology and cybernetics, their mastery of machines and electronics unmatched.",
  },
  {
    name: "Un'rukh'Zann",
    descriptor:
      "The Cosmic Guardian, a Kultist who protects and defends the universe from threats and invaders, their loyalty and bravery inspiring all who serve under their.",
  },
  {
    name: "Vn'xoth'Xor",
    descriptor:
      "The Cosmic Hunter, a Kultist who hunts and kills the creatures and monsters of the universe, their skill with a bow and arrow unmatched.",
  },
  {
    name: "Wn'karn'Zul",
    descriptor:
      "The Cosmic Alchemist, a Kultist who transforms and transmutes matter and energy, their ability to change one substance into anottheir legendary.",
  },
  {
    name: "Xn'xoth'Gul",
    descriptor:
      "The Cosmic Devourer, a Kultist who consumes and assimilates all that he encounters, their hunger and appetite insatiable and unquenchable.",
  },
  {
    name: "Yn'rukh'Zann",
    descriptor:
      "The Cosmic Artisan, a Kultist who creates and crafts works of art that inspire and delight, their skill and mastery of artistry unmatched.",
  },
  {
    name: "Zn'xoth'Xor",
    descriptor:
      "The Cosmic Reaper, a Kultist who collects the souls of mortals and Kultists as they pass into the afterlife, their scythe and cloak symbols of their power over death.",
  },
  {
    name: "Ao'karn'Zul",
    descriptor:
      "The Cosmic Parasite, a Kultist who feeds on the energy and life force of ottheir Kultists and mortals, their hunger and thirst for power insatiable.",
  },
  {
    name: "Bo'xoth'Gul",
    descriptor:
      "The Cosmic Diviner, a Kultist who reads the stars and planets to gain insight into the future and destiny, their astrological knowledge and understanding unmatched.",
  },
  {
    name: "Co'rukh'Zann",
    descriptor:
      "The Cosmic Nomad, a Kultist who roams the universe with no fixed abode, their wanderlust and curiosity leading their to new and exciting adventures.",
  },
  {
    name: "Do'xoth'Xor",
    descriptor:
      "The Cosmic Thief, a Kultist who steals and hoards treasure and wealth, their cunning and stealth unmatched.",
  },
  {
    name: "Eo'karn'Zul",
    descriptor:
      "The Cosmic Poet, a Kultist who writes and recites poetry and verse that captures the beauty and essence of the universe, their words and rhymes inspiring and touching.",
  },
  {
    name: "Fo'xoth'Gul",
    descriptor:
      "The Cosmic Heretic, a Kultist who rebels against the established order and authority, their revolutionary zeal and fervor inspiring ottheirs to join him.",
  },
  {
    name: "Go'rukh'Zann",
    descriptor:
      "The Cosmic Guardian, a Kultist who protects and defends the universe from threats and invaders, their loyalty and bravery inspiring all who serve under their.",
  },
  {
    name: "Ho'xoth'Xor",
    descriptor:
      "The Cosmic Oracle, a Kultist who speaks the words of prophecy and wisdom, their visions and insights into the future invaluable to mortals and Kultists alike.",
  },
  {
    name: "Jo'xoth'Gul",
    descriptor:
      "The Cosmic Shadow, a Kultist who moves through the darkness and shadows unseen and unheard, their stealth and ability to hide unparalleled.",
  },
  {
    name: "Ko'rukh'Zann",
    descriptor:
      "The Cosmic Empress, a Kultist who rules over a vast empire of mortals and Kultists, their power and influence extending across the universe.",
  },
  {
    name: "Lo'xoth'Xor",
    descriptor:
      "The Cosmic Judge, a Kultist who presides over courts of law and justice, their wisdom and fairness in judgment revered and respected.",
  },
  {
    name: "Mo'karn'Zul",
    descriptor:
      "The Cosmic Trickster, a Kultist who delights in playing pranks and jokes on mortals and Kultists, their sense of humor and mischief infectious.",
  },
  {
    name: "No'xoth'Gul",
    descriptor:
      "The Cosmic Necromancer, a Kultist who wields the power of death and decay, their control over the undead and necrotic energies absolute.",
  },
  {
    name: "Oo'rukh'Zann",
    descriptor:
      "The Cosmic Dreamer, a Kultist who dreams the universe into existence, their visions and dreams shaping reality itself.",
  },
  {
    name: "Po'xoth'Xor",
    descriptor:
      "The Cosmic Despot, a Kultist who rules with an iron fist, their subjects living in fear and servitude to their will.",
  },
  {
    name: "Qo'karn'Zul",
    descriptor:
      "The Cosmic Minstrel, a Kultist who sings and plays music that moves the heart and soul, their voice and melodies enchanting and captivating.",
  },
  {
    name: "Ro'xoth'Gul",
    descriptor:
      "The Cosmic Butctheir, a Kultist who revels in the slaughter and carnage of battle, their savagery and brutality unmatched.",
  },
  {
    name: "So'rukh'Zann",
    descriptor:
      "The Cosmic Mystic, a Kultist who meditates and communed with the universe to gain insight into the workings of reality, their mystic powers and abilities unmatched.",
  },
  {
    name: "To'xoth'Xor",
    descriptor:
      "The Cosmic Wanderer, a Kultist who travels the universe in search of enlightenment and understanding, their quest for knowledge and truth never-ending.",
  },
  {
    name: "Uo'karn'Zul",
    descriptor:
      "The Cosmic Illusionist, a Kultist who creates illusions and phantasms that deceive and mislead, their mastery of deception and trickery unmatched.",
  },
  {
    name: "Vo'xoth'Gul",
    descriptor:
      "The Cosmic Titan, a Kultist of immense size and power, their strength and might able to move mountains and shatter planets.",
  },
  {
    name: "Wo'rukh'Zann",
    descriptor:
      "The Cosmic Artist, a Kultist who paints and sculpts works of art that capture the beauty and essence of the universe, their creations and masterpieces inspiring and awe-inspiring.",
  },
  {
    name: "Xo'xoth'Xor",
    descriptor:
      "The Cosmic Wraith, a Kultist who haunts the living and the dead, their presence and influence in the realm of the supernatural terrifying and ominous.",
  },
  {
    name: "Yo'karn'Zul",
    descriptor:
      "The Cosmic Warlord, a Kultist who commands armies of mortals and Kultists, their strategies and tactics on the battlefield unmatched.",
  },
  {
    name: "Zo'xoth'Gul",
    descriptor:
      "The Cosmic Leviathan, a Kultist who rules over the oceans and seas of the universe, their power over water and aquatic life absolute.",
  },
  {
    name: "Aq'rukh'Zann",
    descriptor:
      "The Cosmic Healer, a Kultist who mends and mends the wounds and injuries of mortals and Kultists, their knowledge of medicine and healing arts unmatched.",
  },
  {
    name: "Bq'xoth'Xor",
    descriptor:
      "The Cosmic Engineer, a Kultist who designs and builds machines and technology that push the boundaries of what is possible, their inventions and innovations ahead of their time.",
  },
  {
    name: "Cq'karn'Zul",
    descriptor:
      "The Cosmic Merchant, a Kultist who trades and deals in goods and services, their ability to buy and sell with shrewdness and cunning unmatched.",
  },
  {
    name: "Dq'xoth'Gul",
    descriptor:
      "The Cosmic Avenger, a Kultist who seeks vengeance and retribution for wrongs done to him or ottheirs, their sense of justice and righteousness unwavering.",
  },
  {
    name: "Eq'rukh'Zann",
    descriptor:
      "The Cosmic Ascetic, a Kultist who renounces worldly pleasures and material possessions, their dedication to spiritual pursuits and enlightenment unwavering.",
  },
  {
    name: "Fq'xoth'Xor",
    descriptor:
      "The Cosmic Trickster, a Kultist who delights in playing pranks and jokes on mortals and Kultists, their sense of humor and mischief infectious.",
  },
  {
    name: "Gq'karn'Zul",
    descriptor:
      "The Cosmic Sorceress, a Kultist who wields the power of magic and spells, their mastery of the arcane and mystical unmatched.",
  },
  {
    name: "Hq'xoth'Gul",
    descriptor:
      "The Cosmic Collector, a Kultist who collects and hoards rare and valuable objects and artifacts, their collection and treasures unmatched in their beauty and rarity.",
  },
  {
    name: "Iq'rukh'Zann",
    descriptor:
      "The Cosmic Prophet, a Kultist who speaks the words of prophecy and divination, their insights and visions into the future invaluable to mortals and Kultists alike.",
  },
  {
    name: "Jq'xoth'Xor",
    descriptor:
      "The Cosmic Liberator, a Kultist who fights against oppression and tyranny, their leadership and bravery inspiring ottheirs to join their cause.",
  },
  {
    name: "Kq'karn'Zul",
    descriptor:
      "The Cosmic Mastermind, a Kultist who schemes and plots intricate plans and strategies, their ability to manipulate and deceive ottheirs unmatched.",
  },
  {
    name: "Lq'xoth'Gul",
    descriptor:
      "The Cosmic Shadow, a Kultist who moves through the darkness and shadows unseen and unheard, their stealth and ability to hide unparalleled.",
  },
  {
    name: "Mq'rukh'Zann",
    descriptor:
      "The Cosmic Scholar, a Kultist who studies and researches the mysteries and secrets of the universe, their knowledge and understanding of the cosmos unmatched.",
  },
  {
    name: "Oq'karn'Zul",
    descriptor:
      "The Cosmic Diplomat, a Kultist who negotiates and mediates disputes between mortals and Kultists, their diplomatic skills and abilities unmatched.",
  },
  {
    name: "Pq'xoth'Gul",
    descriptor:
      "The Cosmic Demolistheir, a Kultist who tears down and destroys buildings and structures, their ability to raze cities and fortresses unmatched.",
  },
  {
    name: "Qq'rukh'Zann",
    descriptor:
      "The Cosmic Priestess, a Kultist who serves as a conduit for divine power and energy, their connection to the Kultists and the divine realm unmatched.",
  },
  {
    name: "Rq'xoth'Xor",
    descriptor:
      "The Cosmic Trickster, a Kultist who delights in playing pranks and jokes on mortals and Kultists, their sense of humor and mischief infectious.",
  },
  {
    name: "Sq'karn'Zul",
    descriptor:
      "The Cosmic Necromancer, a Kultist who wields the power of death and decay, their control over the undead and necrotic energies absolute.",
  },
  {
    name: "Tq'xoth'Gul",
    descriptor:
      "The Cosmic Engineer, a Kultist who designs and builds machines and technology that push the boundaries of what is possible, their inventions and innovations ahead of their time.",
  },
  {
    name: "Uq'rukh'Zann",
    descriptor:
      "The Cosmic Oracle, a Kultist who speaks the words of prophecy and wisdom, their visions and insights into the future invaluable to mortals and Kultists alike.",
  },
  {
    name: "Vq'xoth'Xor",
    descriptor:
      "The Cosmic Savior, a Kultist who saves and protects mortals and Kultists from danger and harm, their bravery and selflessness unmatched.",
  },
  {
    name: "Wq'karn'Zul",
    descriptor:
      "The Cosmic Inquisitor, a Kultist who seeks out and punishes those who break the laws of the universe, their dedication to justice and order unwavering.",
  },
  {
    name: "Xq'xoth'Gul",
    descriptor:
      "The Cosmic Destroyer, a Kultist who brings about the end of civilizations and worlds, their power to annihilate planets and stars unmatched.",
  },
  {
    name: "Yq'rukh'Zann",
    descriptor:
      "The Cosmic Scholar, a Kultist who studies and researches the mysteries and secrets of the universe, their knowledge and understanding of the cosmos unmatched.",
  },
  {
    name: "Zq'xoth'Xor",
    descriptor:
      "The Cosmic Wanderer, a Kultist who travels the universe in search of enlightenment and understanding, their quest for knowledge and truth never-ending.",
  },
  {
    name: "Aa'karn'Zul",
    descriptor:
      "The Cosmic Weaver, a Kultist who weaves the fabric of reality and destiny, their ability to shape and mold the universe with their threads unmatched.",
  },
  {
    name: "Ba'xoth'Gul",
    descriptor:
      "The Cosmic Tempest, a Kultist who controls the weattheir and storms of the universe, their power over wind and lightning absolute.",
  },
  {
    name: "Ca'rukh'Zann",
    descriptor:
      "The Cosmic Martyr, a Kultist who sacrifices theirself for the greater good, their bravery and selflessness inspiring ottheirs to do the same.",
  },
  {
    name: "Ythogthar",
    description:
      "The Whisperer of Shadows, a deity whose voice reaches across the abyss to influence the minds of mortals.",
  },
  {
    name: "Xal'ath",
    description:
      "The Shifting One, a being whose form is in constant flux, its true appearance forever hidden from mortal eyes.",
  },
  {
    name: "Gorgulath",
    description:
      "The Eternal Tormentor, an ancient Kultist who seeks to punish those who dare to meddle with forbidden knowledge.",
  },
  {
    name: "Nephrokkos",
    description:
      "The Watctheir in the Depths, a silent observer who lies beneath the oceans and waits for the end of time.",
  },
  {
    name: "Zothura",
    description:
      "The Weaver of Unraveling, a deity that manipulates the fabric of reality to sow chaos and discord.",
  },
  {
    name: "Q'ullnir",
    description:
      "The Faceless One, a being whose visage is forever obscured, inspiring dread and fear in those who seek to know it.",
  },
  {
    name: "Morg'oth",
    description:
      "The Devourer of Dreams, a malevolent entity that feeds upon the fears and nightmares of mortals.",
  },
  {
    name: "Vhaal'thor",
    description:
      "The Eater of Stars, an insatiable cosmic being that consumes celestial bodies in its quest for power.",
  },
  {
    name: "Ithogor",
    description:
      "The Keymaster, an enigmatic deity who holds the keys to the gates of hidden realms and forbidden dimensions.",
  },
  {
    name: "Cthalrix",
    description:
      "The Guardian of the Void, a fierce protector of the empty spaces between worlds and realities.",
  },
  {
    name: "Y'zothel",
    description:
      "The Bringer of Plagues, a deity who spreads pestilence and disease to punish the wicked and the weak.",
  },
  {
    name: "Thul'kra",
    description:
      "The Shaper of Flesh, a Kultist who crafts living beings out of clay and the remains of the dead.",
  },
  {
    name: "Rhoggar",
    description:
      "The Silent Screamer, a being whose inaudible cries shatter the minds of those who unwittingly hear them.",
  },
  {
    name: "Uzakoth",
    description:
      "The Harbinger of Desolation, an ancient Kultist who seeks to bring ruin and devastation to entire worlds.",
  },
  {
    name: "Xyloth",
    description:
      "The Keeper of Secrets, an enigmatic being who hoards knowledge and shares it only with the worthy.",
  },
  {
    name: "Ormoth",
    description:
      "The Unraveler of Time, a deity who can manipulate the flow of time to suit its inscrutable whims.",
  },
  {
    name: "Dhul-Kaag",
    description:
      "The Serpent of the Black Moon, a being that coils around the darkened moon and influences the tides of fate.",
  },
  {
    name: "Vor'zul",
    description:
      "The Howling Void, an entity whose cries echo through the emptiness of space, driving mortals to madness.",
  },
  {
    name: "Thrag'gar",
    description:
      "The Seeder of Worlds, a being who plants the seeds of life on barren planets, only to watch them wittheir and die.",
  },
  {
    name: "Eldathar",
    description:
      "The Unseen Architect, an ancient Kultist who weaves the threads of destiny and fate for all living beings.",
  },
  {
    name: "Gazroth",
    description:
      "The Sunderer of Souls, a deity who steals the souls of mortals and binds them to its eternal servitude.",
  },
  {
    name: "Zul'marok",
    description:
      "The Eye of Madness, an all-seeing deity whose gaze drives those who look upon it into unending insanity.",
  },
  {
    name: "Yth'ghor",
    description:
      "The Sleeper Beneath, a slumbering Kultist whose dreams manifest as horrific nightmares in the waking world.",
  },
  {
    name: "Khar'zul",
    description:
      "The Entropic One, an ancient deity who embodies the inevitable decay and entropy of the universe.",
  },
  {
    name: "Ith'vok",
    description:
      "The Unbound, a being that exists beyond the confines of space and time, defying all mortal understanding.",
  },
  {
    name: "Qhoth'gor",
    description:
      "The World Ender, a Kultist who brings about the destruction of worlds to make way for new creations.",
  },
  {
    name: "Fthar'zun",
    description:
      "The Unquenchable Flame, an eternal fire that consumes all in its path, never to be extinguished.",
  },
  {
    name: "Volgoth",
    description:
      "The Lord of Chains, a deity who binds the souls of the damned to an eternity of servitude.",
  },
  {
    name: "Shog'gath",
    description:
      "The Crimson Tide, a being whose very presence corrupts and taints the world around it.",
  },
  {
    name: "Za'kalor",
    description:
      "The Shrouded One, an entity who dwells in eternal darkness and feeds upon the life force of its victims.",
  },
  {
    name: "Lur'ghal",
    description:
      "The Many-Faced God, a being with countless aspects and identities, forever changing to suit its whims.",
  },
  {
    name: "Xygorath",
    description:
      "The Master of Puppets, a deity who manipulates the actions of mortals for its own mysterious purposes.",
  },
  {
    name: "Y'golonac",
    description:
      "The Breattheir of Secrets, an entity that exhales truths so terrifying they shatter the minds of those who hear them.",
  },
  {
    name: "Mogthar",
    description:
      "The Lord of the Abyss, a deity who rules over the infinite depths and blackest reaches of the cosmos.",
  },
  {
    name: "Nul'zar",
    description:
      "The Void Walker, a being who traverses the emptiness between worlds, devouring anything in its path.",
  },
  {
    name: "Zoth'quor",
    description:
      "The Enveloper, an entity that swallows the light of the stars, plunging worlds into eternal darkness.",
  },
  {
    name: "Thugra",
    description:
      "The Queen of Whispers, a deity who speaks in hushed tones, planting seeds of doubt and mistrust among mortals.",
  },
  {
    name: "Irnax",
    description:
      "The Mirror of Despair, a being that reflects the darkest fears and anxieties of those who gaze upon it.",
  },
  {
    name: "Q'lyth",
    description:
      "The Mind Flayer, an ancient Kultist who feeds on the thoughts and memories of its victims.",
  },
  {
    name: "Ur'goth",
    description:
      "The Hungering Darkness, a deity that devours all light and life, leaving only cold emptiness behind.",
  },
  {
    name: "Oth'zul",
    description:
      "The Inscrutable One, an entity whose motives and desires are forever hidden from mortal comprehension.",
  },
  {
    name: "Klaa'thar",
    description:
      "The Eternal Maelstrom, a deity that embodies the chaotic forces of the universe, forever churning and reshaping reality.",
  },
  {
    name: "Yith'qor",
    description:
      "The Time Devourer, an entity that consumes moments and memories, erasing them from existence.",
  },
  {
    name: "Ragthul",
    description:
      "The Lord of the Forgotten, a deity who presides over lost knowledge and the secrets of the ages.",
  },
  {
    name: "Zul'Goloth",
    description:
      "The Architect of Suffering, an ancient Kultist who designs intricate and torturous fates for those who displease it.",
  },
  {
    name: "Vragthar",
    description:
      "The Eternal Observer, a being that silently watches the universe unfold, never interfering but always judging.",
  },
  {
    name: "Uth'zor",
    description:
      "The Fractured One, a deity split into countless shards, each fragment representing a different aspect of its power.",
  },
  {
    name: "Gol'karth",
    description:
      "The Shadow Weaver, an entity that manipulates darkness and shadow to obscure the truth and sow confusion.",
  },
  {
    name: "Thak'vul",
    description:
      "The Devourer of Essence, a Kultist that feeds upon the very life force of its victims, leaving behind empty husks.",
  },
  {
    name: "Xor'ghal",
    description:
      "The Cosmic Serpent, a deity that coils around the edges of reality, its vast body bridging the gaps between dimensions.",
  },
  {
    name: "Q'zulth",
    description:
      "The Scourge of Worlds, an ancient Kultist that unleashes its wrath upon civilizations, reducing them to dust.",
  },
  {
    name: "Rakthor",
    description:
      "The Harbinger of Silence, a being that seeks to extinguish all sound, plunging the universe into eternal quiet.",
  },
  {
    name: "Ysh'gar",
    description:
      "The Lord of Betrayal, a deity that sows discord and strife, turning allies against one anottheir and breaking bonds of trust.",
  },
  {
    name: "Thygoth",
    description:
      "The Unfathomable One, an entity that exists beyond mortal comprehension, its true nature forever unknown.",
  },
  {
    name: "Zor'ghul",
    description:
      "The Dream Eater, a being that feasts upon the dreams and aspirations of mortals, leaving only despair in its wake.",
  },
  {
    name: "Ulgath",
    description:
      "The Breaker of Wills, a deity that crushes the spirits of those who oppose it, bending them to its will.",
  },
  {
    name: "Ith'zaar",
    description:
      "The Voidborn, an ancient Kultist born from the depths of the cosmos, embodying the cold darkness of the void.",
  },
  {
    name: "Ghaal'zor",
    description:
      "The Weaver of Illusions, an entity that creates false realities to ensnare the minds of its victims.",
  },
  {
    name: "Krath'ul",
    description:
      "The Lord of Entropy, a deity that seeks to hasten the heat death of the universe and ustheir in ultimate oblivion.",
  },
  {
    name: "Nygh'alor",
    description:
      "The Unending Labyrinth, an entity that ensnares those who seek it within its infinite maze of twisting paths and hidden secrets.",
  },
  {
    name: "Xoth'zhar",
    description:
      "The Conqueror of Realms, a deity that traverses dimensions to subjugate worlds and claim them as its own.",
  },
  {
    name: "Vhul'khan",
    description:
      "The Reclaimer of the Lost, a being that seeks to gattheir the forgotten and forsaken souls, offering them a chance at redemption.",
  },
  {
    name: "Mol'garoth",
    description:
      "The Keeper of the Eternal Flame, an ancient Kultist who safeguards the fires that burn at the heart of creation.",
  },
  {
    name: "Thul'zar",
    description:
      "The Warden of the Damned, a deity who rules over the darkest corners of the underworld, maintaining order among the lost souls.",
  },
  {
    name: "Roth'ghor",
    description:
      "The Deceiver, an entity that manipulates mortals with its web of lies, leading them down paths of ruin and despair.",
  },
  {
    name: "Korghal",
    description:
      "The Nexus of Chaos, a being that resides at the center of all disorder, drawing strength from the turmoil it creates.",
  },
  {
    name: "Iz'thar",
    description:
      "The Unmaker, a Kultist that delights in unraveling the threads of existence, reducing all creation to its most basic elements.",
  },
  {
    name: "Yth'zul",
    description:
      "The Eternal Wanderer, an entity that roams the cosmos without purpose or direction, forever lost and alone.",
  },
  {
    name: "Ghal'ra",
    description:
      "The Emptiness, a deity that embodies the void that lies between the stars, instilling a sense of cosmic insignificance in all who ponder it.",
  },
  {
    name: "Zath'gor",
    description:
      "The Sower of Discord, a being that spreads strife and conflict, delighting in the chaos it creates.",
  },
  {
    name: "Nul'garoth",
    description:
      "The Ephemeral One, an ancient Kultist who exists only in fleeting moments, impossible to grasp or understand.",
  },
  {
    name: "Vyth'ara",
    description:
      "The Lord of the Unseen, a deity that commands the unseen forces of the universe, bending them to its inscrutable will.",
  },
  {
    name: "Xa'ghul",
    description:
      "The Shapeless Terror, an entity with no fixed form, whose true nature is hidden behind a veil of fear and revulsion.",
  },
  {
    name: "Dra'zoth",
    description:
      "The Silent Void, a being that embodies the utter absence of sound, wtheire even the faintest whisper is swallowed by the darkness.",
  },
  {
    name: "Qy'thul",
    description:
      "The Entwined One, a deity whose serpentine form wraps around the cosmos, connecting all realities and dimensions.",
  },
  {
    name: "Zul'qath",
    description:
      "The Disruptor, an entity that thrives on chaos, introducing instability and turmoil into once-ordered systems.",
  },
  {
    name: "Igh'var",
    description:
      "The Eternal Frost, a being that embodies the cold vacuum of space, freezing all it touches with its icy breath.",
  },
  {
    name: "Morthalak",
    description:
      "The Dweller in the Depths, an ancient Kultist that slumbers in the darkest reaches of the oceans, waiting to be awakened.",
  },
  {
    name: "Thog'ran",
    description:
      "The Unraveler of Threads, a deity that severs the ties that bind reality, leaving only tatters in its wake.",
  },
  {
    name: "Vagthor",
    description:
      "The Warden of Secrets, an enigmatic being who guards the hidden knowledge of the universe, sharing it only with those who prove themselves worthy.",
  },
  {
    name: "Krul'ghar",
    description:
      "The Eternal Storm, an entity that embodies the destructive power of the elements, bringing devastation to all in its path.",
  },
  {
    name: "Osh'gar",
    description:
      "The Shattered One, a Kultist whose fractured essence is scattered across the cosmos, each piece holding a fragment of its power.",
  },
  {
    name: "Yg'thar",
    description:
      "The Twilight Weaver, a deity that weaves the delicate balance between light and darkness, shaping the destiny of worlds.",
  },
  {
    name: "Xul'zaar",
    description:
      "The Living Void, an entity that consumes everything it touches, leaving only emptiness in its wake.",
  },
  {
    name: "Mak'grath",
    description:
      "The Architect of Nightmares, a being that crafts terrifying visions to torment the minds of those who dare to dream.",
  },
  {
    name: "Nyth'gor",
    description:
      "The Lord of the In-Between, a deity who dwells in the spaces between worlds, manipulating the boundaries that separate them.",
  },
  {
    name: "Ug'thar",
    description:
      "The Fractured Mirror, an entity that reflects distorted images of reality, causing confusion and fear in those who gaze upon it.",
  },
  {
    name: "Zor'kath",
    description:
      "The Eternal Hunger, a Kultist that is never satisfied, devouring all it encounters in its insatiable quest for sustenance.",
  },
  {
    name: "Vol'ghar",
    description:
      "The Breath of the Cosmos, a being that exhales the winds of creation, shaping the very fabric of existence with its breath.",
  },
  {
    name: "Roth'gol",
    description:
      "The Unyielding, a deity that stands against the relentless march of time, defying the inevitability of entropy.",
  },
  {
    name: "Zoth'gar",
    description:
      "The Unseen Hand, an entity that manipulates the fates of mortals and Kultists alike, directing their actions from behind the veil.",
  },
  {
    name: "Vul'zath",
    description:
      "The Whisperer in Shadows, a being that communicates through the quietest of murmurs, sowing seeds of paranoia and suspicion.",
  },
  {
    name: "Gra'thul",
    description:
      "The Watctheir at the Threshold, an ancient Kultist who guards the entrance to ottheir realms, permitting only the worthy to pass.",
  },
  {
    name: "Kor'nag",
    description:
      "The Echo of the Void, a deity that resonates with the emptiness of space, filling the cosmos with a haunting dirge.",
  },
  {
    name: "Xar'zith",
    description:
      "The Web Spinner, an entity that weaves intricate and impenetrable webs of deceit, entrapping those who dare to seek the truth.",
  },
  {
    name: "Tharg'ul",
    description:
      "The Harvester of Despair, a being that feeds upon the hopelessness of mortals, growing stronger with each broken spirit.",
  },
  {
    name: "Uth'gor",
    description:
      "The Shifter of Realities, a Kultist that bends and reshapes the fabric of existence, altering the course of history with its whims.",
  },
  {
    name: "Zyth'ka",
    description:
      "The Keeper of the Endless Library, an entity that collects and safeguards the collective knowledge of the universe.",
  },
  {
    name: "Gol'xar",
    description:
      "The Eater of Worlds, a being that devours entire planets, leaving only desolation and the echoes of a forgotten civilization.",
  },
  {
    name: "Nag'khar",
    description:
      "The Lord of the Inevitable, a deity that ensures the natural cycle of life and death remains unbroken.",
  },
  {
    name: "Iz'thul",
    description:
      "The Dreamweaver, an ancient Kultist who crafts intricate and vivid dreams, offering mortals fleeting glimpses of ottheirworldly beauty.",
  },
  {
    name: "Vroth'gar",
    description:
      "The Wailing Void, an entity that emits a haunting cry, its voice echoing throughout the cosmos and instilling terror in all who hear it.",
  },
  {
    name: "Thol'zar",
    description:
      "The Mind Shatterer, a being that invades the thoughts of mortals, leaving them broken and devoid of sanity.",
  },
  {
    name: "Dra'zul",
    description:
      "The Eternal Eclipse, a deity that obscures the light of the universe, casting a shadow of despair across the cosmos.",
  },
  {
    name: "Ghroth'kal",
    description:
      "The Tide of Oblivion, an entity that swells with the destructive force of forgotten memories, wiping away all traces of the past.",
  },
  {
    name: "Kyth'zar",
    description:
      "The Unending Spiral, a deity that embodies the infinite cycles of creation and destruction, eternally spinning the threads of fate.",
  },
  {
    name: "Xil'ghar",
    description:
      "The Harbinger of the Void, a being that theiralds the encroachment of darkness and the swallowing of all light.",
  },
  {
    name: "Orlath",
    description:
      "The Serpent of Eternity, an ancient Kultist that coils around the cosmos, marking the passage of time with its sinuous movements.",
  },
  {
    name: "Vagthul",
    description:
      "The Silent Stalker, an entity that hunts its prey from the shadows, striking fear into the hearts of all who sense its unseen presence.",
  },
  {
    name: "Ith'qor",
    description:
      "The Cosmic Gatekeeper, a deity that guards the entrances to ottheir dimensions, permitting passage only to those who prove their worth.",
  },
  {
    name: "Zul'ghor",
    description:
      "The Lord of the Abyss, a being that rules over the deepest, darkest reaches of the universe, wtheire all light is extinguished.",
  },
  {
    name: "Mogthul",
    description:
      "The Eternal Maw, an ancient Kultist that devours all in its path, consuming matter and energy alike in its insatiable hunger.",
  },
  {
    name: "Yg'zul",
    description:
      "The Shapeless One, an entity that exists without form, forever shifting and changing to defy mortal comprehension.",
  },
  {
    name: "Zoth'yar",
    description:
      "The Wandering Star, a being that drifts through the cosmos, bringing omens of doom to the worlds it passes.",
  },
  {
    name: "Ulgathor",
    description:
      "The Embrace of Entropy, an ancient Kultist that hastens the disintegration of all things, theiralding the end of all existence.",
  },
  {
    name: "Gra'khal",
    description:
      "The Voice of the Void, an entity that whispers in the emptiness of space, its words carrying the weight of the cosmos.",
  },
  {
    name: "Irn'ghar",
    description:
      "The Shaper of Destinies, a deity that molds the fates of mortals and Kultists alike, guiding the course of history.",
  },
  {
    name: "Kor'zath",
    description:
      "The Bringer of Dusk, a being that ustheirs in the twilight, cloaking the world in shadows and theiralding the onset of night.",
  },
  {
    name: "Thag'zor",
    description:
      "The Eternal Stormbringer, an entity that commands the fury of the elements, unleashing tempests and cataclysms upon the cosmos.",
  },
  {
    name: "Vrul'thar",
    description:
      "The Unbreakable, a deity that embodies the resilience and endurance of the universe, resisting the relentless passage of time.",
  },
  {
    name: "Xoth'ghar",
    description:
      "The Keeper of the Cosmic Balance, a being that maintains the delicate equilibrium between order and chaos, ensuring the harmony of existence.",
  },
  {
    name: "Gol'thaz",
    description:
      "The Dweller in the Shadows, an ancient Kultist that lurks in the dark recesses of reality, waiting for the perfect moment to strike.",
  },
  {
    name: "Raz'kul",
    description:
      "The Lord of Forgotten Dreams, an entity that collects and preserves the lost dreams of mortals, guarding their most secret desires.",
  },
  {
    name: "Ith'gar",
    description:
      "The Eternal Vigil, a deity that stands watch over the passage of time, ensuring that the cycles of creation and destruction remain unbroken.",
  },
  {
    name: "Kru'zath",
    description:
      "The Silent Watctheir, a being that observes the unfolding of the cosmos, its gaze penetrating the deepest mysteries of existence.",
  },
  {
    name: "Nyth'kar",
    description:
      "The Unseen Weaver, an ancient Kultist that manipulates the threads of fate, guiding the destinies of mortals from behind the veil.",
  },
  {
    name: "Uth'zul",
    description:
      "The Eater of Stars, an entity that devours the light of the cosmos, casting worlds into eternal darkness.",
  },
  {
    name: "Zol'gar",
    description:
      "The Lord of the Eternal Depths, a deity that dwells in the bottomless chasms of the universe, wtheire even the Kultists fear to tread.",
  },
  {
    name: "Morth'ghar",
    description:
      "The Whisperer in the Void, a being that speaks in the spaces between worlds, its voice carrying secrets from the edges of reality.",
  },
  {
    name: "Thul'gar",
    description:
      "The Bringer of Eternal Night, an ancient Kultist that extinguishes the light of the stars, shrouding the cosmos in impenetrable darkness.",
  },
  {
    name: "Gath'zar",
    description:
      "The Breath of Decay, an entity that exhales the corrupting influence of entropy, causing all it touches to wittheir and decay.",
  },
  {
    name: "Xar'kul",
    description:
      "The Master of the Cosmic Dance, a deity that orchestrates the intricate patterns of the universe, setting the celestial bodies in motion.",
  },
  {
    name: "Iz'ghul",
    description:
      "The Weaver of Shadows, an entity that crafts intricate patterns of darkness, veiling the secrets of the cosmos from mortal eyes.",
  },
  {
    name: "Zar'ghar",
    description:
      "The Lord of the Cosmic Veil, a deity that guards the boundary between the known universe and the endless expanse of the void.",
  },
  {
    name: "Qyth'kar",
    description:
      "The Eternal Wanderer, a being that roams the vast reaches of space and time, witnessing the birth and death of countless worlds.",
  },
  {
    name: "Mol'zath",
    description:
      "The Guardian of the Celestial Forge, an ancient Kultist that shapes the stars and planets, creating new realms from the fires of creation.",
  },
  {
    name: "Yg'thul",
    description:
      "The Unraveler of Mysteries, an entity that seeks out the deepest secrets of the cosmos, unlocking the hidden knowledge of the universe.",
  },
  {
    name: "Thog'zar",
    description:
      "The Timeless One, a deity that exists outside the constraints of time, observing the eternal cycle of creation and destruction.",
  },
  {
    name: "Nul'ghar",
    description:
      "The Shrouded One, a being that conceals itself within layers of impenetrable darkness, its true form hidden from all who seek it.",
  },
  {
    name: "Vyth'kar",
    description:
      "The Cosmic Sentinel, an ancient Kultist that watches over the cosmos, ensuring the safety and harmony of all living things.",
  },
  {
    name: "Xa'zul",
    description:
      "The Lord of the Shifting Sands, an entity that governs the eternal flow of time, altering its course to suit its inscrutable desires.",
  },
  {
    name: "Dra'ghar",
    description:
      "The Whisperer of Madness, a deity that sows chaos and insanity among mortals, delighting in their descent into madness.",
  },
  {
    name: "Roth'zar",
    description:
      "The Unfathomable, a being that embodies the incomprehensible vastness of the cosmos, instilling a sense of awe and insignificance in all who ponder it.",
  },
  {
    name: "Korghul",
    description:
      "The Nexus of Dreams, an ancient Kultist that exists at the center of all mortal imaginings, drawing strength from their hopes and fears.",
  },
  {
    name: "Yth'ghar",
    description:
      "The Eternal Void, an entity that embodies the emptiness at the heart of creation, the dark abyss from which all things arise and to which they must return.",
  },
  {
    name: "Ghal'zath",
    description:
      "The Architect of Fate, a being that designs the grand patterns of the cosmos, guiding the destinies of all living things.",
  },
  {
    name: "Nagth'zar",
    description:
      "The Hidden Flame, an entity that burns at the heart of the cosmos, igniting the fires of creation and destruction in an unending cycle.",
  },
  {
    name: "Thag'kul",
    description:
      "The Silent Observer, a deity that watches the unfolding of the universe, its gaze witnessing the birth and death of stars and worlds.",
  },
  {
    name: "Vor'ghar",
    description:
      "The Lord of the Cosmic Labyrinth, a being that dwells in the heart of an intricate maze, guarding the secrets of the universe.",
  },
  {
    name: "Rul'zath",
    description:
      "The Timeless Traveler, an ancient Kultist that traverses the vastness of space and time, collecting the memories of forgotten ages.",
  },
  {
    name: "Kra'ghul",
    description:
      "The Eternal Scribe, an entity that records the stories of the cosmos, preserving the tales of countless civilizations for all eternity.",
  },
  {
    name: "Gol'thar",
    description:
      "The Weaver of Stars, a deity that spins the threads of celestial bodies, creating the intricate tapestry of the cosmos.",
  },
  {
    name: "Xul'ghar",
    description:
      "The Shaper of Worlds, a being that molds and sculpts the very fabric of reality, bending it to its inscrutable will.",
  },
  {
    name: "Morth'zul",
    description:
      "The Keeper of the Cosmic Key, an ancient Kultist that guards the secret of existence, unlocking the mysteries of the universe for those who prove themselves worthy.",
  },
  {
    name: "Zar'kul",
    description:
      "The Lord of the Eternal Mists, an entity that shrouds the boundaries between worlds, obscuring the path between life and death.",
  },
  {
    name: "Uth'ghar",
    description:
      "The Dreamer in the Void, a deity that slumbers in the emptiness of space, its dreams shaping the very fabric of reality.",
  },
  {
    name: "Yg'kul",
    description:
      "The Whisperer of Secrets, a being that shares the hidden knowledge of the cosmos with those who dare to seek it out.",
  },
  {
    name: "Vol'zar",
    description:
      "The Lord of the Cosmic Oceans, an ancient Kultist that dwells in the vast depths of the universe, wtheire even light cannot penetrate.",
  },
  {
    name: "Thul'ghar",
    description:
      "The Bringer of Eternal Silence, an entity that muffles the voices of the cosmos, stilling the music of the sptheires.",
  },
  {
    name: "Gath'kul",
    description:
      "The Architect of Illusions, a deity that crafts intricate mirages, deceiving the senses and luring mortals into its labyrinthine web.",
  },
  {
    name: "Xar'ghar",
    description:
      "The Eternal Watctheir, a being that gazes unblinking into the depths of time, observing the infinite dance of creation and destruction.",
  },
  {
    name: "Irn'zul",
    description:
      "The Dweller Beyond Time, an entity that exists in the liminal spaces between moments, eluding the grasp of temporal boundaries.",
  },
  {
    name: "Zoth'kul",
    description:
      "The Lord of the Eternal Winds, a deity that governs the cosmic currents, guiding the movements of celestial bodies through the vast expanse of the universe.",
  },
  {
    name: "Qorghul",
    description:
      "The Unquenchable Thirst, a being that hungers for the essence of life, draining the vitality of all it encounters.",
  },
  {
    name: "Mol'ghar",
    description:
      "The Eternal Dreamer, an ancient Kultist that slumbers in the depths of the cosmos, its dreams shaping the destiny of countless worlds.",
  },
  {
    name: "Yrth'kul",
    description:
      "The Cosmic Embrace, an entity that enfolds the universe in its tender grasp, nurturing and protecting the fragile balance of existence.",
  },
  {
    name: "Thag'ghar",
    description:
      "The Shattered Mirror, a deity that reflects the fractured images of reality, revealing the hidden truths that lie beneath the surface.",
  },
  {
    name: "Vul'ghar",
    description:
      "The Master of the Eternal Dance, a being that orchestrates the intricate patterns of the cosmos, guiding the interplay of life and death.",
  },
  {
    name: "Kyth'ghar",
    description:
      "The Weaver of Silence, an ancient Kultist that stitches the fabric of silence, allowing the universe to rest in the tranquility of the void.",
  },
  {
    name: "Xil'kul",
    description:
      "The Bringer of Shadows, an entity that casts a veil of darkness over the cosmos, obscuring the light of truth and knowledge.",
  },
  {
    name: "Orlath'ghar",
    description:
      "The Serpent of the Void, a deity that slittheirs through the emptiness of space, consuming the remnants of dead worlds.",
  },
  {
    name: "Vagth'zar",
    description:
      "The Inescapable Grasp, a being that ensnares all within its unyielding embrace, drawing them inexorably toward their ultimate fate.",
  },
  {
    name: "Ith'zul",
    description:
      "The Lord of the Cosmic Forge, an ancient Kultist that shapes and tempers the raw materials of the universe, creating worlds and stars in its celestial workshop.",
  },
  {
    name: "Zul'ghar",
    description:
      "The Unending Cycle, an entity that embodies the eternal processes of creation and destruction, ensuring the continuity of existence.",
  },
  {
    name: "Mogth'ghar",
    description:
      "The Eternal Hunger, a deity that devours the essence of life, consuming the energy of the cosmos to satiate its insatiable appetite.",
  },
  {
    name: "Rakth'zul",
    description:
      "The Lord of the Cosmic Chasm, an entity that resides in the deepest reaches of the universe, guarding the secrets of the void from those who would dare to uncover them.",
  },
  {
    name: "Ulgath'ghar",
    description:
      "The Harbinger of Entropy, a being that accelerates the decay of all things, hastening the inevitable end of the cosmos.",
  },
  {
    name: "Gra'kul",
    description:
      "The Voice of the Stars, an ancient Kultist that speaks through the celestial bodies, its words echoing through the vast expanse of space.",
  },
  {
    name: "Irn'zath",
    description:
      "The Shaper of Horizons, an entity that sculpts the boundaries of reality, stretching the limits of mortal perception.",
  },
  {
    name: "Kor'ghar",
    description:
      "The Bringer of Twilight, a deity that ustheirs in the dusk, painting the sky with the colors of the fading day.",
  },
  {
    name: "Zul'yar",
    description:
      "The Eternal Eclipse, a being that casts a shadow over the cosmos, blotting out the light of the stars and plunging worlds into darkness.",
  },
  {
    name: "Or'nath",
    description:
      "The Spiral of Eternity, an ancient Kultist that coils around the axis of the universe, marking the passage of time with its serpentine embrace.",
  },
  {
    name: "Vagth'ghar",
    description:
      "The Whisperer in the Darkness, an entity that stalks the silent void, breathing secrets into the ears of those who dare to listen.",
  },
  {
    name: "Kru'ghar",
    description:
      "The Infinite Eye, a being that perceives the vast expanse of the universe, its gaze penetrating the deepest mysteries of existence.",
  },
  {
    name: "Nyth'zul",
    description:
      "The Unraveler of Fate, an ancient Kultist that manipulates the threads of destiny, altering the course of history to suit its enigmatic whims.",
  },
  {
    name: "Uth'kul",
    description:
      "The Lord of the Abyssal Depths, an entity that dwells in the darkest recesses of the cosmos, wtheire light and hope are extinguished.",
  },
  {
    name: "Zol'ghar",
    description:
      "The Eternal Sentinel, a deity that stands watch over the boundaries of the universe, defending the cosmos from the encroachment of chaos.",
  },
  {
    name: "Morth'zath",
    description:
      "The Bringer of Silence, a being that steals the voices of the stars, plunging the cosmos into an eternal hush.",
  },
  {
    name: "Tul'zar",
    description:
      "The Weaver of Cosmic Threads, an entity that binds togettheir the fabric of the universe, maintaining the delicate balance between order and chaos.",
  },
  {
    name: "Golth'ghar",
    description:
      "The Eternal Maelstrom, a deity that churns the celestial seas, shaping the currents of the cosmos and guiding the fates of countless worlds.",
  },
  {
    name: "Xur'kul",
    description:
      "The Unfathomable Depths, a being that embodies the vast, impenetrable darkness of the cosmos, wtheire even the bravest explorers fear to venture.",
  },
  {
    name: "Zul'gar",
    description:
      "The Eternal Vigil, an entity that keeps watch over the cosmos, its unblinking eye observing the endless march of time.",
  },
  {
    name: "Kra'zath",
    description:
      "The Shattered Worlds, a deity that embodies the remnants of forgotten civilizations, preserving their memories in the void of space.",
  },
  {
    name: "Vogth'ghar",
    description:
      "The Cosmic Wanderer, a being that roams the farthest reaches of the universe, bearing witness to the birth and death of countless galaxies.",
  },
  {
    name: "Mol'zul",
    description:
      "The Lord of Entwined Destinies, an ancient Kultist that weaves togettheir the fates of mortal beings, creating a tapestry of intricate patterns and designs.",
  },
  {
    name: "Rul'ghar",
    description:
      "The Eternal Current, a being that flows through the cosmos, guiding the course of celestial bodies and shaping the destinies of worlds.",
  },
  {
    name: "Zar'zath",
    description:
      "The Keeper of Cosmic Secrets, an ancient Kultist that hoards the hidden knowledge of the universe, sharing its wisdom only with those who prove themselves worthy.",
  },
  {
    name: "Vyth'ghar",
    description:
      "The Lord of the Astral Labyrinth, a deity that presides over the infinite maze of the cosmos, guiding travelers through its twisting pathways and secret portals.",
  },
  {
    name: "Xa'ghar",
    description:
      "The Cosmic Jester, a being that capers through the universe, sowing chaos and confusion in its wake, delighting in the disarray it leaves behind.",
  },
  {
    name: "Orl'zath",
    description:
      "The Guardian of the Cosmic Gateway, an ancient Kultist that stands sentinel over the passage between realms, ensuring the balance between dimensions is maintained.",
  },
  {
    name: "Zoth'ghar",
    description:
      "The Eternal Reckoning, an entity that measures the lifespan of the universe, its calculations determining the ultimate fate of existence.",
  },
  {
    name: "Nul'kul",
    description:
      "The Silent Void, a deity that swallows the cries of the cosmos, ensuring the eternal tranquility of the celestial expanse.",
  },
  {
    name: "Gra'ghar",
    description:
      "The Shrouded Wanderer, a being that traverses the cosmos in a cloak of darkness, observing the countless mysteries of the universe.",
  },
  {
    name: "Ith'zath",
    description:
      "The Lord of the Astral Winds, an ancient Kultist that governs the cosmic breezes, shaping the movements of celestial bodies through the vastness of space.",
  },
  {
    name: "Tul'ghar",
    description:
      "The Eternal Dream, an entity that drifts through the cosmos, its visions shaping the destinies of countless worlds and civilizations.",
  },
  {
    name: "Vol'kul",
    description:
      "The Bringer of Cosmic Harmony, a deity that orchestrates the intricate symphony of the universe, ensuring the delicate balance between order and chaos is maintained.",
  },
  {
    name: "Yg'zath",
    description:
      "The Eternal Reflection, an entity that mirrors the cosmos in its unending dance, revealing the hidden patterns and connections that bind all things togettheir.",
  },
  {
    name: "Rul'kul",
    description:
      "The Lord of the Cosmic Nexus, a deity that governs the intersection of countless dimensions, ensuring the integrity of the multiverse remains intact.",
  },
  {
    name: "Vyth'kul",
    description:
      "The Eternal Embrace, an entity that enfolds the cosmos in its tender grasp, nurturing the delicate balance between life and death.",
  },
  {
    name: "Az'zul",
    description:
      "The Lord of Cosmic Ripples, an ancient Kultist that manipulates the gravitational waves of the universe, orchestrating the delicate dance of celestial bodies.",
  },
  {
    name: "Thag'zath",
    description:
      "The Eternal Observer, an entity that silently watches the unfolding of the cosmos, recording every detail of existence in its vast cosmic archives.",
  },
  {
    name: "Og'kul",
    description:
      "The Harbinger of Cosmic Convergence, a deity that oversees the alignment of celestial bodies, ustheiring in periods of great change and transformation.",
  },
  {
    name: "Yrth'zul",
    description:
      "The Bringer of Celestial Fire, an entity that ignites the hearts of stars, kindling the birth of new worlds and the renewal of old ones.",
  },
  {
    name: "Zul'zath",
    description:
      "The Eternal Tide, a deity that governs the cosmic oceans, shaping the currents of the universe and guiding the fates of countless galaxies.",
  },
  {
    name: "Mogth'kul",
    description:
      "The Lord of the Cosmic Web, a being that weaves the fabric of existence, connecting all things through its intricate network of threads.",
  },
  {
    name: "Orlath'zath",
    description:
      "The Eternal Whisper, an ancient Kultist that breathes life into the cosmos, its breath carrying the seeds of creation across the vast expanse of the universe.",
  },
  {
    name: "Qorghul'zath",
    description:
      "The Lord of the Eternal Night, a deity that dwells in the darkness between stars, guarding the secrets of the void from prying eyes.",
  },
  {
    name: "Golth'kul",
    description:
      "The Cosmic Serpent, a being that slittheirs through the vastness of space, devouring the remnants of dead worlds and the echoes of forgotten civilizations.",
  },
  {
    name: "Xur'ghar",
    description:
      "The Unseen Architect, an ancient Kultist that shapes the unseen forces of the universe, guiding the interplay between light and darkness.",
  },
  {
    name: "Nyr'kul",
    description:
      "The Cosmic Gardener, an ancient Kultist that tends to the celestial flora, nurturing the growth of nebulae and ensuring the vibrancy of the universe.",
  },
  {
    name: "Thoth'kul",
    description:
      "The Eternal Pendulum, a being that marks the passage of time in the cosmos, swinging between the forces of creation and destruction.",
  },
  {
    name: "Ragth'zath",
    description:
      "The Lord of the Cosmic Veil, an ancient Kultist that obscures the boundaries between dimensions, ensuring the mysteries of the universe remain hidden.",
  },
  {
    name: "Mol'kul",
    description:
      "The Cosmic Sentinel, a deity that watches over the boundaries of the universe, defending the cosmos from the encroachment of chaos and entropy.",
  },
  {
    name: "Vorlath'zath",
    description:
      "The Lord of the Astral Tides, an ancient Kultist that governs the cosmic currents, guiding the movements of celestial bodies through the void of space.",
  },
  {
    name: "Orl'ghar",
    description:
      "The Cosmic Geometer, an entity that shapes the geometry of the universe, ensuring the delicate balance between order and chaos is maintained.",
  },
  {
    name: "Vyth'zath",
    description:
      "The Bringer of Cosmic Twilight, a deity that ustheirs in the dusk of the universe, theiralding the end of an age and the birth of a new cosmic cycle.",
  },
  {
    name: "Nal'ghar",
    description:
      "The Lord of Celestial Echoes, an ancient Kultist that collects the reverberations of cosmic events, weaving them into the tapestry of the universe.",
  },
  {
    name: "Og'zath",
    description:
      "The Harbinger of Cosmic Rebirth, a deity that oversees the cycles of creation and destruction, ensuring the constant renewal of the cosmos.",
  },
  {
    name: "Ith'ghar",
    description:
      "The Master of Celestial Gravity, a being that manipulates the invisible forces of the universe, guiding the movements of celestial bodies.",
  },
  {
    name: "Thul'zath",
    description:
      "The Cosmic Embers, an ancient Kultist that embodies the last vestiges of dying stars, preserving their memories in the vast expanse of the universe.",
  },
  {
    name: "Vogth'kul",
    description:
      "The Eternal Ouroboros, an entity that consumes its own tail, representing the cycles of creation and destruction in the cosmos.",
  },
  {
    name: "Kra'ghar",
    description:
      "The Lord of the Cosmic Crossroads, a deity that presides over the intersections of space and time, guiding travelers through the infinite pathways of the universe.",
  },
  {
    name: "Uth'zath",
    description:
      "The Cosmic Sentry, a deity that guards the edges of the universe, defending the cosmos from the encroachment of chaos and entropy.",
  },
  {
    name: "Golth'zul",
    description:
      "The Celestial Catalyst, a being that sparks the chain reactions of cosmic events, setting in motion the intricate dance of creation and destruction.",
  },
  {
    name: "Orl'zul",
    description:
      "The Lord of the Cosmic Chasm, an ancient Kultist that dwells in the depths of the universe, its presence an eternal reminder of the vastness of the cosmos.",
  },
  {
    name: "Nyr'zath",
    description:
      "The Lord of Celestial Orbits, an ancient Kultist that oversees the paths of celestial bodies, guiding their journeys through the cosmos.",
  },
  {
    name: "Yg'ghar",
    description:
      "The Eternal Wanderer, an entity that traverses the universe, witnessing the countless marvels of the cosmos and sharing their stories with those who dare to listen.",
  },
  {
    name: "Kyth'kul",
    description:
      "The Bringer of Celestial Shadows, an entity that casts the darkness of the universe, providing refuge for the mysteries and wonders of the cosmos.",
  },
  {
    name: "Gra'zath",
    description:
      "The Eternal Architect, a being that designs the structures of the universe, weaving the fabric of existence with its divine vision.",
  },
  {
    name: "Ith'kul",
    description:
      "The Lord of the Cosmic Lattice, an ancient Kultist that maintains the web of connections that spans the universe, binding all things togettheir in cosmic harmony.",
  },
  {
    name: "Nal'zath",
    description:
      "The Lord of Celestial Resonance, an ancient Kultist that attunes the vibrations of the universe, maintaining the harmony and balance of cosmic energies.",
  },
  {
    name: "Yrth'ghar",
    description:
      "The Eternal Dreamer, an entity that weaves the tapestry of the cosmos within its dreams, creating and shaping the reality of the universe.",
  },
  {
    name: "Og'zul",
    description:
      "The Harbinger of Cosmic Enlightenment, a deity that illuminates the minds of sentient beings, granting them glimpses of the infinite wisdom of the cosmos.",
  },
  {
    name: "Thul'kul",
    description:
      "The Lord of the Cosmic Mirage, an ancient Kultist that distorts the perceptions of reality, challenging those who seek to understand the nature of the cosmos.",
  },
  {
    name: "Vogth'zath",
    description:
      "The Eternal Catalyst, an entity that triggers the reactions of cosmic events, initiating the complex interplay between creation and destruction.",
  },
  {
    name: "Kra'kul",
    description:
      "The Lord of Celestial Epiphanies, a deity that bestows revelations upon those who gaze deeply into the mysteries of the universe.",
  },
  {
    name: "Xil'zath",
    description:
      "The Lord of the Celestial Threshold, an entity that guards the borders between realms, ensuring the stability of the multiverse and the preservation of its secrets.",
  },
  {
    name: "Irn'kul",
    description:
      "The Cosmic Alchemist, a deity that transmutes the raw elements of the universe, creating new substances and forms that enrich the tapestry of existence.",
  },
  {
    name: "Nyr'ghar",
    description:
      "The Lord of Celestial Whispers, an ancient Kultist that communicates the secrets of the universe through subtle vibrations, revealing its wisdom to those who listen closely.",
  },
  {
    name: "Og'ghar",
    description:
      "The Harbinger of Cosmic Balance, a deity that ensures the stability of the universe by maintaining the delicate equilibrium between the forces of creation and destruction.",
  },
  {
    name: "Vorlath'kul",
    description:
      "The Lord of the Astral Depths, an ancient Kultist that delves into the darkest corners of the cosmos, unearthing the hidden treasures of the universe.",
  },
  {
    name: "Orl'kul",
    description:
      "The Bringer of Celestial Bounty, an entity that bestows the gifts of the cosmos upon those who prove themselves worthy, enriching their lives with the wonders of the universe.",
  },
  {
    name: "Nemthra",
    description:
      "The Shaper of Celestial Illusions, an ancient Kultist that manipulates the perception of reality, bending the cosmos to its will and altering the course of destiny.",
  },
  {
    name: "Ytholan",
    description:
      "The Eternal Emissary, an entity that serves as a cosmic diplomat, fostering communication and understanding between the diverse civilizations that populate the universe.",
  },
  {
    name: "Qorzeth",
    description:
      "The Harbinger of Astral Storms, a deity that summons the tempests of the cosmos, wielding their chaotic power to reshape the universe and challenge its inhabitants.",
  },
  {
    name: "Dran'vor",
    description:
      "The Master of Celestial Ciptheirs, a being that conceals the secrets of the universe within intricate codes and enigmatic patterns, guarding the wisdom of the cosmos from the unworthy.",
  },
  {
    name: "Volkrath",
    description:
      "The Lord of the Astral Expanse, an ancient Kultist that stretches the boundaries of the universe, opening up new realms of possibility and exploration for those who dare to venture forth.",
  },
  {
    name: "Lysander",
    description:
      "The Bringer of Celestial Balance, an entity that restores harmony to the cosmos by mediating the eternal struggle between light and darkness, creation and destruction.",
  },
  {
    name: "Zirathos",
    description:
      "The Cosmic Weaver, a deity that spins the threads of the universe, connecting all things in an intricate tapestry of existence that spans the vast expanse of the cosmos.",
  },
  {
    name: "Grahelion",
    description:
      "The Eternal Sentinel, a being that stands guard at the edge of the universe, protecting the delicate fabric of reality from the ravages of chaos and entropy.",
  },
  {
    name: "Itarion",
    description:
      "The Lord of the Cosmic Crucible, an ancient Kultist that oversees the forging of celestial bodies, melding the raw materials of the universe into wondrous new creations.",
  },
  {
    name: "Ruloth",
    description:
      "The Bringer of Celestial Omens, an entity that reveals the signs and portents of the cosmos, guiding those who seek to understand the mysteries of the universe.",
  },
  {
    name: "Xeldris",
    description:
      "The Cosmic Wanderer, a deity that traverses the farthest reaches of the universe, exploring the infinite realms of existence and gattheiring the wisdom of the cosmos.",
  },
  {
    name: "Uthariel",
    description:
      "The Celestial Architect, a being that designs the intricate structures of the universe, crafting the celestial bodies and cosmic pathways that make up the fabric of existence.",
  },
  {
    name: "Galthoros",
    description:
      "The Lord of the Astral Depths, an ancient Kultist that dwells in the darkest corners of the universe, its presence a constant reminder of the vastness of the cosmos and the unknown that lies beyond our understanding.",
  },
  {
    name: "Orlethys",
    description:
      "The Bringer of Cosmic Serenity, an entity that calms the chaos of the cosmos, allowing the universe to find moments of peace and tranquility in the midst of constant change and upheaval.",
  },
  {
    name: "Vyttheiran",
    description:
      "The Cosmic Enigma, a deity that embodies the mysteries of the universe, challenging those who seek to uncover its secrets with riddles and puzzles that defy comprehension.",
  },
  {
    name: "Naltharos",
    description:
      "The Shaper of Cosmic Echoes, an ancient Kultist that manipulates the resonances of the universe, harmonizing the frequencies of existence and imbuing the cosmos with its divine melodies.",
  },
  {
    name: "Yttheiron",
    description:
      "The Eternal Witness, an entity that observes the birth and death of stars, chronicling the ever-changing landscape of the cosmos and preserving its infinite story.",
  },
  {
    name: "Quorvath",
    description:
      "The Harbinger of Celestial Currents, a deity that directs the flow of cosmic energies, guiding the celestial bodies along their predetermined paths through the vast expanse of the universe.",
  },
  {
    name: "Drakthor",
    description:
      "The Master of Astral Portals, a being that controls the gateways between dimensions, ensuring the delicate balance of the multiverse and the stability of the cosmic fabric.",
  },
  {
    name: "Valthazar",
    description:
      "The Lord of the Cosmic Hearth, an ancient Kultist that kindles the fires of creation, igniting the stars and breathing life into the cold expanse of the cosmos.",
  },
  {
    name: "Lysara",
    description:
      "The Bringer of Celestial Unity, an entity that fosters understanding and cooperation among the diverse beings of the universe, forging bonds that transcend the boundaries of space and time.",
  },
  {
    name: "Zirakar",
    description:
      "The Cosmic Liberator, a deity that frees the trapped energies of the universe, releasing the potential for new growth and the expansion of existence.",
  },
  {
    name: "Grathalon",
    description:
      "The Eternal Seeker, a being that tirelessly searches the cosmos for the hidden truths of existence, its quest leading it to the farthest reaches of the universe.",
  },
  {
    name: "Itharos",
    description:
      "The Lord of the Cosmic Web, an ancient Kultist that weaves the intricate connections between celestial bodies, binding the universe togettheir in a delicate dance of harmony and balance.",
  },
  {
    name: "Rulthor",
    description:
      "The Bringer of Celestial Epiphanies, an entity that bestows moments of cosmic clarity upon those who seek to understand the mysteries of the universe, guiding them to enlightenment.",
  },
  {
    name: "Xelthar",
    description:
      "The Cosmic Scribe, a deity that records the ever-changing story of the universe, inscribing the annals of existence upon the eternal parchment of the cosmos.",
  },
  {
    name: "Ultharion",
    description:
      "The Celestial Visionary, a being that peers into the infinite possibilities of the universe, revealing glimpses of the future and guiding the destinies of countless civilizations.",
  },
  {
    name: "Galdoros",
    description:
      "The Lord of the Astral Tempest, an ancient Kultist that wields the destructive power of cosmic storms, ensuring the cyclical nature of creation and destruction in the universe.",
  },
  {
    name: "Orythys",
    description:
      "The Bringer of Cosmic Insight, an entity that imparts the wisdom of the cosmos, illuminating the minds of those who seek to unravel the mysteries of the universe.",
  },
  {
    name: "Vytharos",
    description:
      "The Cosmic Guardian, a deity that watches over the universe, ensuring the safety and sanctity of the cosmic tapestry and maintaining the delicate balance between light and darkness.",
  },
  {
    name: "Xyrtuth",
    description:
      "A towering entity that existed before time and space, Xyrtuth's mere presence causes reality to warp and bend.",
  },
  {
    name: "Zul'Goth",
    description:
      "An insectoid being that dwells in the deepest recesses of the earth, Zul'Goth feeds on the life force of those who enter its domain.",
  },
  {
    name: "Nir'kaz",
    description:
      "A being of pure energy, Nir'kaz was once worshiped as a Kultist by a long-forgotten civilization. It now seeks to reclaim its lost power.",
  },
  {
    name: "Thyxil",
    description:
      "An amorphous blob of tentacles and eyes, Thyxil can sense the thoughts of any living creature that comes within its grasp.",
  },
  {
    name: "Gorguth",
    description:
      "A massive beast that roams the ocean depths, Gorguth's roar can shatter ships and level entire cities.",
  },
  {
    name: "Vyr'thul",
    description:
      "A being of shadows and whispers, Vyr'thul delights in driving mortals to madness with its mind-bending illusions.",
  },
  {
    name: "Kythax",
    description:
      "A shape-shifting creature that can assume any form it desires, Kythax revels in deceiving and manipulating those it encounters.",
  },
  {
    name: "Zar'kath",
    description:
      "A skeletal figure that presides over the land of the dead, Zar'kath judges the souls of the departed and metes out punishment accordingly.",
  },
  {
    name: "Eryndor",
    description:
      "A being of light and purity, Eryndor is said to possess the power to heal even the most grievous of wounds.",
  },
  {
    name: "Nyxar",
    description:
      "A being of pure darkness, Nyxar seeks to extinguish all light and plunge the world into eternal night.",
  },
  {
    name: "Zarathul",
    description:
      "A being of fire and brimstone, Zarathul is said to dwell at the heart of the earth and command the forces of volcanic eruption.",
  },
  {
    name: "Kynaxia",
    description:
      "A being of serpentine form, Kynaxia is said to possess the power of prophetic vision and the ability to see into the future.",
  },
  {
    name: "Tyraxus",
    description:
      "A being of immense strength and size, Tyraxus is said to have the power to move mountains and reshape the land itself.",
  },
  {
    name: "Zephyrus",
    description:
      "A being of wind and storm, Zephyrus is said to control the winds and unleash devastating storms upon those who cross its path.",
  },
  {
    name: "Chronoth",
    description:
      "A being that exists outside of time, Chronoth is said to be able to manipulate time and alter the course of history itself.",
  },
  {
    name: "Grendar",
    description:
      "A being of pure chaos, Grendar is said to revel in destruction and madness, bringing ruin to all who come into contact with it.",
  },
  {
    name: "Zynthar",
    description:
      "A being of psychic power, Zynthar can control the minds of ottheirs and manipulate their thoughts and emotions at will.",
  },
  {
    name: "Azurael",
    description:
      "A being of pure evil, Azurael is said to command legions of demons and delights in tempting mortals to their doom.",
  },
  {
    name: "Kryndar",
    description:
      "A being of ice and frost, Kryndar can freeze anything it touches and create massive blizzards that bury entire cities.",
  },
  {
    name: "Zaelus",
    description:
      "A being of light and purity, Zaelus is said to possess the power to banish darkness and purify the souls of the wicked.",
  },
  {
    name: "Naxir",
    description:
      "A being of death and decay, Naxir is said to wield the power to rot away flesh and reduce even the mightiest of warriors to bones.",
  },
  {
    name: "Xylox",
    description:
      "A being of earth and stone, Xylox can control the very ground beneath its feet and create massive earthquakes that level entire cities.",
  },
  {
    name: "Zyriax",
    description:
      "A being of darkness and shadows, Zyriax is said to be able to hide in plain sight and strike from the darkness without warning.",
  },
  {
    name: "Vylith",
    description:
      "A being of blood and terror, Vylith is said to feed on fear and terror, growing stronger with every scream of its victims.",
  },
  {
    name: "Zyraxia",
    description:
      "A being of poison and venom, Zyraxia is said to have a touch that can kill even the hardiest of creatures within seconds.",
  },
  {
    name: "Mythra",
    description:
      "A being of music and harmony, Mythra is said to possess the power to soothe even the most savage of beasts and calm the fiercest of storms.",
  },
  {
    name: "Zyndor",
    description:
      "A being of shadows and deceit, Zyndor is said to be able to disguise itself as anything it desires and manipulate ottheirs to do its bidding.",
  },
  {
    name: "Xylar",
    description:
      "A being of plants and nature, Xylar is said to be able to control the very trees and flowers themselves, bending them to its will.",
  },
  {
    name: "Kythril",
    description:
      "A being of technology and machines, Kythril is said to possess the power to control even the most advanced of technological devices with a single thought.",
  },
  {
    name: "Zyrinth",
    description:
      "A being of fire and flames, Zyrinth is said to be able to summon infernos that can incinerate entire armies within seconds.",
  },
  {
    name: "Vryndar",
    description:
      "A being of dreams and nightmares, Vryndar is said to be able to enter the dreams of ottheirs and manipulate their deepest fears and desires.",
  },
  {
    name: "Zalthar",
    description:
      "A being of dark magic, Zalthar is said to be able to raise the dead and control them as their own army.",
  },
  {
    name: "Oryndar",
    description:
      "A being of beauty and grace, Oryndar is said to possess the power to enchant and entrance those who look upon it.",
  },
  {
    name: "Vor'thax",
    description:
      "A being of pure malice, Vor'thax is said to delight in the suffering of ottheirs and revel in their pain.",
  },
  {
    name: "Xyrnax",
    description:
      "A being of ice and snow, Xyrnax is said to be able to freeze entire landscapes and bring eternal winter to the world.",
  },
  {
    name: "Zythar",
    description:
      "A being of toxic energy, Zythar is said to be able to corrupt and poison even the purest of souls.",
  },
  {
    name: "Krynnor",
    description:
      "A being of ancient wisdom, Krynnor is said to possess knowledge of the universe beyond mortal comprehension.",
  },
  {
    name: "Ezrath",
    description:
      "A being of shadow and deception, Ezrath is said to be able to blend into the darkness and disappear without a trace.",
  },
  {
    name: "Zorathar",
    description:
      "A being of pure energy, Zorathar is said to be able to release devastating blasts of power that can obliterate entire armies.",
  },
  {
    name: "Kyraxis",
    description:
      "A being of primal rage, Kyraxis is said to be able to transform into a monstrous beast and rampage across the land.",
  },
  {
    name: "Nar'koth",
    description:
      "A being of ancient evil, Nar'koth is said to have been sealed away by the Kultists themselves for fear of its power.",
  },
  {
    name: "Vyrnaxia",
    description:
      "A being of dreams and illusions, Vyrnaxia is said to be able to enter the minds of ottheirs and control their thoughts and actions.",
  },
  {
    name: "Zyraxis",
    description:
      "A being of darkness and decay, Zyraxis is said to be able to wittheir and rot anything it touches.",
  },
  {
    name: "Kalthar",
    description:
      "A being of shadows and whispers, Kalthar is said to be able to manipulate reality itself and bend it to its will.",
  },
  {
    name: "Xyranth",
    description:
      "A being of raw power, Xyranth is said to be able to unleash blasts of energy that can level entire cities.",
  },
  {
    name: "Zyrathor",
    description:
      "A being of pure darkness, Zyrathor is said to be able to summon legions of shadow creatures to do its bidding.",
  },
  {
    name: "Zal'thul",
    description:
      "A being of the void, Zal'thul is said to be able to open portals to ottheir dimensions and summon creatures from beyond our world.",
  },
  {
    name: "Phyrix",
    description:
      "A being of disease and decay, Phyrix spreads plagues and illnesses wtheirever it goes, leaving death and destruction in its wake.",
  },
  {
    name: "Nyx'xa",
    description:
      "A being of nightmares, Nyx'xa feeds on the fears and anxieties of mortals, using their terror to increase its power.",
  },
  {
    name: "Gorgorath",
    description:
      "A being of immense darkness, Gorgorath is said to dwell in the deepest pits of the abyss, waiting to consume all light and life.",
  },
  {
    name: "Xyr'tal",
    description:
      "A being of crystal and light, Xyr'tal is said to be able to channel the power of the sun itself, incinerating anything that stands in its way.",
  },
  {
    name: "Eryndoroth",
    description:
      "A being of pure goodness, Eryndoroth is said to be the protector of all that is right and just, smiting evil wtheirever it is found.",
  },
  {
    name: "Kyth'ra",
    description:
      "A being of music and beauty, Kyth'ra is said to be able to charm even the most hardened hearts with its enchanting melodies.",
  },
  {
    name: "Zarathrax",
    description:
      "A being of corruption and decay, Zarathrax spreads its taint wtheirever it goes, turning even the purest of souls into twisted abominations.",
  },
  {
    name: "Nyxith",
    description:
      "A being of shadow and deception, Nyxith is said to be able to blend into the darkness, becoming invisible to all but the keenest of eyes.",
  },
  {
    name: "Gorathar",
    description:
      "A being of fire and destruction, Gorathar is said to be able to incinerate entire cities with a single blast of its fiery breath.",
  },
  {
    name: "Xy'za",
    description:
      "A being of intellect and knowledge, Xy'za is said to possess the wisdom of the ages, knowing all that has been and all that will be.",
  },
  {
    name: "Zyralith",
    description:
      "A being of darkness and despair, Zyralith is said to be able to cloud the minds of mortals, causing them to lose hope and fall into darkness.",
  },
  {
    name: "Eryndax",
    description:
      "A being of light and redemption, Eryndax is said to be able to purify even the darkest of souls, offering them a chance at redemption.",
  },
  {
    name: "Kyth'ron",
    description:
      "A being of chaos and destruction, Kyth'ron is said to revel in violence and bloodshed, taking pleasure in the suffering of ottheirs.",
  },
  {
    name: "Zul'kara",
    description:
      "A being of the jungle, Zul'kara is said to be able to command the plants and animals of the forest, using them to do its bidding.",
  },
  {
    name: "Nyraxia",
    description:
      "A being of dreams and illusions, Nyraxia is said to be able to enter the dreams of mortals, twisting their minds and bending them to its will.",
  },
  {
    name: "Gorgathar",
    description:
      "A being of the earth, Gorgathar is said to be able to cause earthquakes and reshape the land at will, creating mountains and valleys with ease.",
  },
  {
    name: "Xyr'dar",
    description:
      "A being of art and creation, Xyr'dar is said to be able to bring its visions to life, shaping the world with its imagination.",
  },
  {
    name: "Zar'kara",
    description:
      "A being of war and destruction, Zar'kara is said to be able to raise armies of the undead and lead them into battle, crushing all who oppose it.",
  },
  {
    name: "Eryndaria",
    description:
      "A being of healing and restoration, Eryndaria is said to be able to mend broken bodies and soothe troubled minds, bringing peace to all who seek its aid.",
  },
  {
    name: "Kyth'lar",
    description:
      "A being of darkness and corruption, Kyth'lar is said to be able to infect the minds of mortals, turning them into its twisted servants.",
  },
  {
    name: "Zal'dor",
    description:
      "A being of magic and mysticism, Zal'dor is said to be able to weave spells of incredible power, bending reality to its will.",
  },
  {
    name: "Nyx'dar",
    description:
      "A being of night and stealth, Nyx'dar is said to be able to move silently and undetected, striking from the shadows with deadly precision.",
  },
  {
    name: "Gorathia",
    description:
      "A being of fire and passion, Gorathia is said to be able to inspire mortals with its fervor and determination, driving them to great deeds.",
  },
  {
    name: "Xyronia",
    description:
      "A being of intellect and knowledge, Xyronia is said to be able to unlock the secrets of the universe, revealing the mysteries of existence.",
  },
  {
    name: "Zyralia",
    description:
      "A being of beauty and grace, Zyralia is said to be able to inspire mortals with its artistry and elegance, bringing joy to all who witness its creations.",
  },
  {
    name: "Eryndraxia",
    description:
      "A being of redemption and forgiveness, Eryndraxia is said to be able to absolve mortals of their sins, offering them a chance at salvation.",
  },
  {
    name: "Kyth'liar",
    description:
      "A being of madness and chaos, Kyth'liar is said to be able to drive mortals to insanity with its twisted thoughts and dark visions.",
  },
  {
    name: "Zalthor",
    description:
      "A being of darkness and shadow, Zalthor is said to be able to manipulate the shadows themselves, using them to conceal its presence and strike from unexpected angles.",
  },
  {
    name: "Phyraxia",
    description:
      "A being of flame and fury, Phyraxia is said to be able to incinerate entire armies with a single blast of its fiery breath.",
  },
  {
    name: "Nyxul",
    description:
      "A being of darkness and despair, Nyxul is said to be able to fill mortals with an overwhelming sense of hopelessness and despair, driving them to madness or suicide.",
  },
  {
    name: "Gorathax",
    description:
      "A being of corruption and decay, Gorathax is said to be able to rot living flesh with its mere touch, leaving behind nothing but decay and death.",
  },
  {
    name: "Xyris",
    description:
      "A being of prophecy and foresight, Xyris is said to be able to predict the future with unerring accuracy, even seeing events that are still centuries away.",
  },
  {
    name: "Zarathorax",
    description:
      "A being of darkness and hatred, Zarathorax is said to be the embodiment of all that is evil in the world, seeking only to spread its corrupting influence and destroy all that is good and pure.",
  },
  {
    name: "Nyxaroth",
    description:
      "A being of shadow and death, Nyxaroth is said to be able to strike down even the mightiest of foes with a single touch of its shadowy hand.",
  },
  {
    name: "Kyth'ronax",
    description:
      "A being of war and destruction, Kyth'ronax is said to be able to lay waste to entire armies with a single swipe of its massive claws.",
  },
  {
    name: "Zyranthor",
    description:
      "A being of chaos and entropy, Zyranthor is said to be able to unravel the fabric of reality itself, sending entire worlds spiraling into oblivion.",
  },
  {
    name: "Phyrazia",
    description:
      "A being of disease and corruption, Phyrazia is said to be able to infect entire populations with its virulent plagues, bringing death and suffering to all it encounters.",
  },
  {
    name: "Nyxurath",
    description:
      "A being of darkness and mystery, Nyxurath is said to be able to shroud itself in impenetrable darkness, becoming invisible to mortal eyes and striking from the shadows.",
  },
  {
    name: "Xyrox",
    description:
      "A being of thunder and lightning, Xyrox is said to be able to summon storms of unparalleled ferocity, striking down anything that stands in its way with bolts of lightning.",
  },
  {
    name: "Zal'kira",
    description:
      "A being of nature and growth, Zal'kira is said to be able to bring forth life from even the most barren of landscapes.",
  },
  {
    name: "Phyrrus",
    description:
      "A being of war and conquest, Phyrrus is said to be able to turn the tide of battle with its sheer presence alone.",
  },
  {
    name: "Nyx'ul",
    description:
      "A being of pure malice, Nyx'ul delights in causing pain and suffering to all those who cross its path.",
  },
  {
    name: "Gorgathrax",
    description:
      "A being of death and decay, Gorgathrax is said to be able to raise armies of the undead and command them to do its bidding.",
  },
  {
    name: "Xy'thar",
    description:
      "A being of light and warmth, Xy'thar is said to be able to heal even the most grievous of wounds with its gentle touch.",
  },
  {
    name: "Zorathraxus",
    description:
      "A being of cold and darkness, Zorathraxus is said to be able to freeze the very souls of mortals with its icy breath.",
  },
  {
    name: "Eryndorix",
    description:
      "A being of justice and righteousness, Eryndorix is said to be the arbiter of all that is fair and just, bringing order to the chaos of the world.",
  },
  {
    name: "Kyth'ar",
    description:
      "A being of dreams and illusions, Kyth'ar is said to be able to weave intricate visions that can ensnare even the most cautious of minds.",
  },
  {
    name: "Zarathus",
    description:
      "A being of corruption and decay, Zarathus is said to be able to infect even the purest of souls with its foul taint.",
  },
  {
    name: "Nyx'arath",
    description:
      "A being of darkness and terror, Nyx'arath is said to be able to plunge entire worlds into eternal night with a single thought.",
  },
  {
    name: "Gorath'ul",
    description:
      "A being of fire and chaos, Gorath'ul is said to be able to incite riots and rebellions wtheirever it goes, unleashing anarchy and destruction in its wake.",
  },
  {
    name: "Xy'vax",
    description:
      "A being of cosmic power, Xy'vax is said to be able to manipulate the very fabric of the universe, bending reality to its will.",
  },
  {
    name: "Zyra'xis",
    description:
      "A being of envy and greed, Zyra'xis is said to covet all that is beautiful and precious in the world, hoarding its treasures in its lair.",
  },
  {
    name: "Erynd'ul",
    description:
      "A being of light and hope, Erynd'ul is said to be able to inspire even the most despondent of hearts, filling them with renewed purpose and determination.",
  },
  {
    name: "Kyth'rix",
    description:
      "A being of deception and trickery, Kyth'rix is said to be able to outwit even the cleverest of mortals.",
  },
  {
    name: "Zygomar",
    description:
      "A being of war and conquest, Zygomar is said to be able to lead armies to victory, crushing all who stand in their way.",
  },
  {
    name: "Xyphos",
    description:
      "A being of honor and justice, Xyphos is said to be able to mete out punishment to the wicked, ensuring that they receive what they deserve.",
  },
  {
    name: "Zorath",
    description:
      "A being of rage and fury, Zorath is said to be able to unleash devastating attacks upon its enemies, reducing them to rubble.",
  },
  {
    name: "Eryndrath",
    description:
      "A being of purity and light, Eryndrath is said to be able to heal even the most grievous of wounds, bringing hope and comfort to all who encounter it.",
  },
  {
    name: "Zal'kan",
    description:
      "A being of cunning and deception, Zal'kan is said to be able to outwit even the cleverest of foes, leading them into traps and ambushes.",
  },
  {
    name: "Gorgorax",
    description:
      "A being of vast intellect, Gorgorax is said to be able to solve even the most complex of puzzles and devise the most devious of plans.",
  },
  {
    name: "Zyrorath",
    description:
      "A being of destruction and chaos, Zyrorath is said to be able to tear apart reality itself, unleashing cataclysms upon the world.",
  },
  {
    name: "Xylophor",
    description:
      "A being of nature and life, Xylophor is said to be able to create entire forests and breathe life into the earth itself.",
  },
];


let Kultists = [
  {
    "name": "Azathoguz",
    "description": "The Cosmic Devourer, Azathoguz is a deity of unimaginable size and power. Its mere presence can cause galaxies to crumble into dust, leaving behind only darkness and despair. It is said that Azathoguz has slumbered for eons, but its awakening would theirald the end of all things."
  },
  {
    "name": "Xylograth",
    "description": "Xylograth, the Whispering Behemoth, is a monstrous god who manipulates the minds of lesser beings, sowing seeds of chaos and madness. Its voice echoes through the vast emptiness of space, a haunting reminder that no one is safe from its corrupting influence. Those who dare to listen risk losing their sanity."
  },
  {
    "name": "Ygthorium",
    "description": "The Planet Shatterer, Ygthorium is an ancient god who is said to have forged the universe with the force of its cosmic hammer. Its destructive might is unrivaled, and the mere mention of its name has been known to cause lesser gods to tremble. When Ygthorium strikes, stars extinguish and planets crumble."
  },
  {
    "name": "Nethulak",
    "description": "Nethulak, the Eternal Void, is an enigmatic being of darkness and absence. It is said that Nethulak devours the very fabric of reality itself, leaving nothing but a cold, empty void in its wake. Its insatiable hunger threatens to consume the cosmos if left unchecked."
  },
  {
    "name": "Vorgathrax",
    "description": "Vorgathrax, the Starborn Serpent, is an immense god whose body coils around the cosmos, its scales glittering like a thousand suns. Its hypnotic gaze can ensnare lesser beings, enslaving them to its terrible will. Those who dare challenge Vorgathrax risk eternal torment within its cosmic coils."
  },
  {
    "name": "Zulthazar",
    "description": "Zulthazar, the Dread Weaver, is a cosmic horror who spins intricate webs throughout the universe, binding stars and galaxies to its dark designs. Its sinister influence reaches into the hearts and minds of mortals, twisting their thoughts and desires to serve its inscrutable purposes. Few can escape the tangled webs of Zulthazar's deceit."
  },
  {
    "name": "Gorathum",
    "description": "Gorathum, the Abyssal Behemoth, is a terrifying god who slumbers in the deepest recesses of space. Its dreams seep into the minds of those who venture too close, filling them with unspeakable horrors and visions of their own demise. The awakening of Gorathum would theirald an age of darkness and suffering for all."
  },
  {
    "name": "Rathogor",
    "description": "Rathogor, the Scourge of Stars, is a relentless god that hunts through the cosmos, seeking out and extinguishing all life it encounters. Its body is a swirling mass of cosmic energy, and its gaze burns with the fury of a thousand dying suns. When Rathogor passes, only cold silence remains."
  },
  {
    "name": "Igtholaron",
    "description": "Igtholaron, the Unseen One, is a god of shadows and secrets, a silent observer of the universe. Its form is ever-changing, but its presence can be felt in the cold whispers that dance on the edge of perception. Igtholaron's knowledge of the cosmos is vast and terrifying, and those who delve too deep into its mysteries are forever changed."
  },
  {
    "name": "Qytharax",
    "description": "Qytharax, the Celestial Nightmare, is a god who feeds on the fears and insecurities of mortal beings. Its colossal form is shrouded in darkness, and it is said that to gaze upon Qytharax is to be driven mad with terror. As it feasts on the nightmares of countless worlds, its power grows ever stronger, threatening to engulf the universe in an eternal night of terror."
  }
]

// replace all their / she with their
// replace all Kultist / Kultist with Kultist

for (let i = 0; i < names.length; i++) {
  const currentObject = names[i];
  const currentName = currentObject.name;

  for (let j = i + 1; j < names.length; j++) {
    const comparisonObject = names[j];
    const comparisonName = comparisonObject.name;

    if (currentName === comparisonName) {
      names.splice(j, 1);
      j--; // decrement j so it doesn't skip the next element after the splice
    }
  }
}

// // Convert the JSON object to a string
// const jsonData = JSON.stringify(names);
//
// // Write the string to a file
// fs.writeFile('names.json', jsonData, (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('Data written to file');
//     }
// });

console.log(names.length);
