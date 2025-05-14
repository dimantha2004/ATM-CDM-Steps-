import { GuideData } from '../types';

export const guideData: GuideData = {
  atm: [
    {
      id: 1,
      title: {
        english: "Insert Your Card",
        sinhala: "ඔබේ කාඩ්පත ඇතුල් කරන්න",
        tamil: "உங்கள் அட்டையை செருகவும்"
      },
      description: {
        english: "Insert your card into the ATM with the chip facing up and towards the machine.",
        sinhala: "චිප් එක ඉහළට සහ යන්ත්‍රය දෙසට මුහුණ ලා ඔබේ කාඩ්පත ATM එකට ඇතුල් කරන්න.",
        tamil: "சிப் மேல்நோக்கி இருக்குமாறும், இயந்திரத்தை நோக்கியும் உங்கள் அட்டையை ATM இல் செருகவும்."
      },
      animationSrc: "https://assets2.lottiefiles.com/private_files/lf30_p5tali1o.json",
      tips: [
        {
          english: "Make sure you're using the correct card for your transaction.",
          sinhala: "ඔබගේ ගනුදෙනුව සඳහා නිවැරදි කාඩ්පත භාවිතා කරන බවට වග බලා ගන්න.",
          tamil: "உங்கள் பரிவர்த்தனைக்கு சரியான அட்டையைப் பயன்படுத்துகிறீர்கள் என்பதை உறுதிப்படுத்திக் கொள்ளுங்கள்."
        }
      ]
    },
    {
      id: 2,
      title: {
        english: "Enter Your PIN",
        sinhala: "ඔබේ PIN අංකය ඇතුල් කරන්න",
        tamil: "உங்கள் PIN ஐ உள்ளிடவும்"
      },
      description: {
        english: "Enter your 4-digit PIN number using the keypad. Cover your hand while typing to protect your PIN.",
        sinhala: "යතුරු පුවරුව භාවිතයෙන් ඔබේ අංක 4 PIN අංකය ඇතුලත් කරන්න. ඔබේ PIN ආරක්ෂා කිරීමට ටයිප් කරන අතරතුර ඔබේ අත ආවරණය කරන්න.",
        tamil: "கீபேடைப் பயன்படுத்தி உங்கள் 4 இலக்க PIN எண்ணை உள்ளிடவும். உங்கள் PIN ஐப் பாதுகாக்க தட்டச்சு செய்யும் போது உங்கள் கையை மூடவும்."
      },
      animationSrc: "https://assets3.lottiefiles.com/packages/lf20_qdbb21wb.json",
      tips: [
        {
          english: "Never share your PIN with anyone, even bank staff.",
          sinhala: "බැංකු කාර්ය මණ්ඩලය පවා කිසි විටෙකත් ඔබේ PIN අංකය කාටවත් ලබා නොදෙන්න.",
          tamil: "வங்கி ஊழியர்கள் உட்பட யாருடனும் உங்கள் PIN ஐப் பகிர வேண்டாம்."
        }
      ]
    },
    {
      id: 3,
      title: {
        english: "Select Transaction Type",
        sinhala: "ගනුදෙනු වර්ගය තෝරන්න",
        tamil: "பரிவர்த்தனை வகையைத் தேர்ந்தெடுக்கவும்"
      },
      description: {
        english: "Choose the type of transaction you want to perform (e.g., Cash Withdrawal, Balance Inquiry, Fund Transfer).",
        sinhala: "ඔබට සිදු කිරීමට අවශ්‍ය ගනුදෙනු වර්ගය තෝරන්න (උදා: මුදල් ආපසු ගැනීම, ශේෂ විමසීම, අරමුදල් මාරු කිරීම).",
        tamil: "நீங்கள் செய்ய விரும்பும் பரிவர்த்தனை வகையைத் தேர்ந்தெடுக்கவும் (எ.கா., பணம் எடுத்தல், இருப்பு விசாரணை, நிதி பரிமாற்றம்)."
      },
      animationSrc: "https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json",
      tips: [
        {
          english: "Make sure you select the correct account type (Savings/Current) if prompted.",
          sinhala: "ඉල්ලා සිටියහොත් නිවැරදි ගිණුම් වර්ගය (ඉතිරි කිරීම්/වත්මන්) තෝරා ගන්නා බවට වග බලා ගන්න.",
          tamil: "கேட்கப்பட்டால், சரியான கணக்கு வகையைத் (சேமிப்பு/நடப்பு) தேர்ந்தெடுப்பதை உறுதிப்படுத்திக் கொள்ளுங்கள்."
        }
      ]
    },
    {
      id: 4,
      title: {
        english: "Enter Amount",
        sinhala: "මුදල ඇතුලත් කරන්න",
        tamil: "தொகையை உள்ளிடவும்"
      },
      description: {
        english: "Enter the amount you wish to withdraw. Make sure it's within your daily withdrawal limit.",
        sinhala: "ඔබට ආපසු ගැනීමට අවශ්‍ය මුදල ඇතුළත් කරන්න. එය ඔබේ දෛනික ආපසු ගැනීමේ සීමාව තුළ ඇති බවට වග බලා ගන්න.",
        tamil: "நீங்கள் எடுக்க விரும்பும் தொகையை உள்ளிடவும். இது உங்கள் தினசரி பணம் எடுக்கும் வரம்புக்குள் இருப்பதை உறுதிப்படுத்திக் கொள்ளுங்கள்."
      },
      animationSrc: "https://assets8.lottiefiles.com/packages/lf20_ysfs4vcy.json",
      tips: [
        {
          english: "Many ATMs offer preset amount buttons for quick selection.",
          sinhala: "බොහෝ ATM යන්ත්‍ර ඉක්මන් තේරීම සඳහා පෙර සැකසූ ප්‍රමාණ බොත්තම් ලබා දෙයි.",
          tamil: "பல ATM கள் விரைவான தேர்வுக்கு முன்னமைக்கப்பட்ட தொகை பொத்தான்களை வழங்குகின்றன."
        }
      ]
    },
    {
      id: 5,
      title: {
        english: "Collect Cash and Card",
        sinhala: "මුදල් සහ කාඩ්පත එකතු කරන්න",
        tamil: "பணம் மற்றும் அட்டையை சேகரிக்கவும்"
      },
      description: {
        english: "Take your cash from the dispenser, then take your card when it's ejected. Don't forget to collect your receipt if you requested one.",
        sinhala: "ඩිස්පෙන්සරයෙන් ඔබේ මුදල් ගන්න, පසුව එය ඉවත් කළ විට ඔබේ කාඩ්පත ගන්න. ඔබ ඉල්ලුවා නම් ඔබේ රිසිට්පත එකතු කිරීමට අමතක නොකරන්න.",
        tamil: "டிஸ்பென்சரில் இருந்து உங்கள் பணத்தை எடுத்துக் கொள்ளுங்கள், பின்னர் அது வெளியேற்றப்படும்போது உங்கள் அட்டையை எடுத்துக் கொள்ளுங்கள். நீங்கள் கேட்டிருந்தால் உங்கள் ரசீதை சேகரிக்க மறக்காதீர்கள்."
      },
      animationSrc: "https://assets10.lottiefiles.com/packages/lf20_kcsr6fcp.json",
      tips: [
        {
          english: "Count your cash immediately while still at the ATM.",
          sinhala: "තවමත් ATM එකේ සිටින අතරතුර වහාම ඔබේ මුදල් ගණන් කරන්න.",
          tamil: "இன்னும் ATM இல் இருக்கும்போதே உங்கள் பணத்தை உடனடியாக எண்ணுங்கள்."
        },
        {
          english: "Never accept help from strangers at the ATM.",
          sinhala: "ATM එකේදී කිසි විටෙකත් අමුත්තන්ගෙන් උපකාර භාර නොගන්න.",
          tamil: "ATM இல் அந்நியர்களிடமிருந்து உதவியை ஒருபோதும் ஏற்க வேண்டாம்."
        }
      ]
    }
  ],
  cdm: [
    {
      id: 1,
      title: {
        english: "Insert Your Card",
        sinhala: "ඔබේ කාඩ්පත ඇතුල් කරන්න",
        tamil: "உங்கள் அட்டையை செருகவும்"
      },
      description: {
        english: "Insert your card into the CDM with the chip facing up and towards the machine.",
        sinhala: "චිප් එක ඉහළට සහ යන්ත්‍රය දෙසට මුහුණ ලා ඔබේ කාඩ්පත CDM එකට ඇතුල් කරන්න.",
        tamil: "சிப் மேல்நோக்கி இருக்குமாறும், இயந்திரத்தை நோக்கியும் உங்கள் அட்டையை CDM இல் செருகவும்."
      },
      animationSrc: "https://assets2.lottiefiles.com/private_files/lf30_p5tali1o.json",
      tips: [
        {
          english: "Use the card linked to the account where you want to deposit money.",
          sinhala: "ඔබට මුදල් තැන්පත් කිරීමට අවශ්‍ය ගිණුමට සම්බන්ධ කාඩ්පත භාවිතා කරන්න.",
          tamil: "நீங்கள் பணத்தை டெபாசிட் செய்ய விரும்பும் கணக்குடன் இணைக்கப்பட்ட அட்டையைப் பயன்படுத்தவும்."
        }
      ]
    },
    {
      id: 2,
      title: {
        english: "Enter Your PIN",
        sinhala: "ඔබේ PIN අංකය ඇතුල් කරන්න",
        tamil: "உங்கள் PIN ஐ உள்ளிடவும்"
      },
      description: {
        english: "Enter your 4-digit PIN number using the keypad. Cover your hand while typing to protect your PIN.",
        sinhala: "යතුරු පුවරුව භාවිතයෙන් ඔබේ අංක 4 PIN අංකය ඇතුලත් කරන්න. ඔබේ PIN ආරක්ෂා කිරීමට ටයිප් කරන අතරතුර ඔබේ අත ආවරණය කරන්න.",
        tamil: "கீபேடைப் பயன்படுத்தி உங்கள் 4 இலக்க PIN எண்ணை உள்ளிடவும். உங்கள் PIN ஐப் பாதுகாக்க தட்டச்சு செய்யும் போது உங்கள் கையை மூடவும்."
      },
      animationSrc: "https://assets3.lottiefiles.com/packages/lf20_qdbb21wb.json",
      tips: [
        {
          english: "Never share your PIN with anyone, even bank staff.",
          sinhala: "බැංකු කාර්ය මණ්ඩලය පවා කිසි විටෙකත් ඔබේ PIN අංකය කාටවත් ලබා නොදෙන්න.",
          tamil: "வங்கி ஊழியர்கள் உட்பட யாருடனும் உங்கள் PIN ஐப் பகிர வேண்டாம்."
        }
      ]
    },
    {
      id: 3,
      title: {
        english: "Select Deposit Option",
        sinhala: "තැන්පතු විකල්පය තෝරන්න",
        tamil: "டெபாசிட் விருப்பத்தைத் தேர்ந்தெடுக்கவும்"
      },
      description: {
        english: "Select the 'Cash Deposit' option from the main menu. Then choose the account type (Savings/Current) where you want to deposit.",
        sinhala: "ප්‍රධාන මෙනුවෙන් 'මුදල් තැන්පතු' විකල්පය තෝරන්න. පසුව ඔබට තැන්පත් කිරීමට අවශ්‍ය ගිණුම් වර්ගය (ඉතිරි කිරීම්/වත්මන්) තෝරන්න.",
        tamil: "முக்கிய மெனுவிலிருந்து 'பண டெபாசிட்' விருப்பத்தைத் தேர்ந்தெடுக்கவும். பின்னர் நீங்கள் டெபாசிட் செய்ய விரும்பும் கணக்கு வகையைத் (சேமிப்பு/நடப்பு) தேர்ந்தெடுக்கவும்."
      },
      animationSrc: "https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json",
      tips: [
        {
          english: "If you have multiple accounts, make sure to select the correct one.",
          sinhala: "ඔබට ගිණුම් කිහිපයක් තිබේ නම්, නිවැරදි එක තෝරා ගන්නා බවට වග බලා ගන්න.",
          tamil: "உங்களிடம் பல கணக்குகள் இருந்தால், சரியானதைத் தேர்ந்தெடுப்பதை உறுதிப்படுத்திக் கொள்ளுங்கள்."
        }
      ]
    },
    {
      id: 4,
      title: {
        english: "Insert Cash",
        sinhala: "මුදල් ඇතුල් කරන්න",
        tamil: "பணத்தை செருகவும்"
      },
      description: {
        english: "When prompted, insert your cash into the deposit slot. Make sure bills are unfolded and not stuck together.",
        sinhala: "ඉල්ලූ විට, ඔබේ මුදල් තැන්පතු ස්ලොට් එකට ඇතුල් කරන්න. බිල්පත් නොනැමී සහ එකට නොඇලී ඇති බවට වග බලා ගන්න.",
        tamil: "கேட்கும்போது, உங்கள் பணத்தை டெபாசிட் ஸ்லாட்டில் செருகவும். பில்கள் மடிக்கப்படாமலும், ஒட்டிக்கொள்ளாமலும் இருப்பதை உறுதிப்படுத்திக் கொள்ளுங்கள்."
      },
      animationSrc: "https://assets8.lottiefiles.com/packages/lf20_ysfs4vcy.json",
      tips: [
        {
          english: "The machine will count and verify the cash automatically.",
          sinhala: "යන්ත්‍රය ස්වයංක්‍රීයව මුදල් ගණන් කර තහවුරු කරයි.",
          tamil: "இயந்திரம் தானாகவே பணத்தை எண்ணி சரிபார்க்கும்."
        },
        {
          english: "Remove any paperclips, staples, or rubber bands from the cash.",
          sinhala: "මුදල්වලින් කඩදාසි කොළ, ස්ටේපල් හෝ රබර් පටි ඉවත් කරන්න.",
          tamil: "பணத்திலிருந்து பேப்பர்கிளிப்ஸ், ஸ்டேப்ளர்கள் அல்லது ரப்பர் பேண்டுகளை அகற்றவும்."
        }
      ]
    },
    {
      id: 5,
      title: {
        english: "Confirm Amount",
        sinhala: "ප්‍රමාණය තහවුරු කරන්න",
        tamil: "தொகையை உறுதிப்படுத்தவும்"
      },
      description: {
        english: "Verify that the amount displayed on the screen matches the amount you inserted. If correct, confirm the transaction.",
        sinhala: "තිරයේ දිස්වන මුදල ඔබ ඇතුල් කළ මුදලට ගැලපෙන බව තහවුරු කරන්න. නිවැරදි නම්, ගනුදෙනුව තහවුරු කරන්න.",
        tamil: "திரையில் காட்டப்படும் தொகை நீங்கள் செருகிய தொகையுடன் பொருந்துகிறதா என்பதை சரிபார்க்கவும். சரியானால், பரிவர்த்தனையை உறுதிப்படுத்தவும்."
      },
      animationSrc: "https://assets10.lottiefiles.com/packages/lf20_kcsr6fcp.json",
      tips: [
        {
          english: "If there's a discrepancy, cancel the transaction and seek assistance.",
          sinhala: "අනනුකූලතාවයක් තිබේ නම්, ගනුදෙනුව අවලංගු කර සහාය පතන්න.",
          tamil: "முரண்பாடு இருந்தால், பரிவர்த்தனையை ரத்து செய்து உதவியைப் பெறுங்கள்."
        }
      ]
    },
    {
      id: 6,
      title: {
        english: "Collect Card and Receipt",
        sinhala: "කාඩ්පත සහ රිසිට්පත එකතු කරන්න",
        tamil: "அட்டை மற்றும் ரசீதை சேகரிக்கவும்"
      },
      description: {
        english: "Take your card and receipt when the transaction is complete. Your deposit will be credited to your account immediately or after verification depending on your bank.",
        sinhala: "ගනුදෙනුව සම්පූර්ණ වූ විට ඔබේ කාඩ්පත සහ රිසිට්පත ගන්න. ඔබේ තැන්පතුව ඔබේ බැංකුව මත රඳා පවතිමින් වහාම හෝ සත්‍යාපනයෙන් පසුව ඔබේ ගිණුමට බැර කෙරේ.",
        tamil: "பரிவர்த்தனை முடிந்ததும் உங்கள் அட்டை மற்றும் ரசீதை எடுத்துக் கொள்ளுங்கள். உங்கள் டெபாசிட் உங்கள் வங்கியைப் பொறுத்து உடனடியாகவோ அல்லது சரிபார்ப்புக்குப் பிறகோ உங்கள் கணக்கில் வரவு வைக்கப்படும்."
      },
      animationSrc: "https://assets10.lottiefiles.com/packages/lf20_kcsr6fcp.json",
      tips: [
        {
          english: "Keep your receipt for future reference until the deposit is confirmed in your account.",
          sinhala: "තැන්පතුව ඔබේ ගිණුමෙහි තහවුරු කරන තෙක් අනාගත යොමුව සඳහා ඔබේ රිසිට්පත තබා ගන්න.",
          tamil: "டெபாசிட் உங்கள் கணக்கில் உறுதி செய்யப்படும் வரை எதிர்கால குறிப்புக்காக உங்கள் ரசீதை வைத்திருங்கள்."
        }
      ]
    }
  ]
};