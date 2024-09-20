import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import Headlines from "./Headlines";
import News from "./News";

export default function HomeNews(props) {
  return (
    <BoxComponent width="47%">
      <TypographyComponent
        fontSize="30px"
        fontWeight="700"
        fontFamily="var(--main)"
        color="var(--dull)"
        textAlign="right"
      >
        {props.title}
      </TypographyComponent>
      <Headlines
        title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
        detail="
محبت ایک ایسی خوبصورت اور طاقتور جذبہ ہے جو انسان کی زندگی میں روشنی اور خوشی بھر دیتی ہے۔ یہ ایک ایسی طاقت ہے جو ہمیں ایک دوسرے کے قریب لاتی ہے، ہمارے دلوں کو جوڑتی ہے اور ہمیں ایک دوسرے کی قدر کرنا سکھاتی ہے۔ محبت کا مفہوم صرف رومانوی تعلقات تک محدود نہیں ہے، بلکہ یہ دوستی، خاندان، اور انسانیت کے درمیان بھی پایا جاتا ہے۔

محبت کی شروعات انسان کی زندگی کے ابتدائی مراحل سے ہی ہوتی ہے۔ ایک بچہ اپنی ماں کی محبت کے بغیر نہیں رہ سکتا۔ ماں کی محبت اس کے لئے سب سے پہلی محبت ہوتی ہے، جو اس کی زندگی کا سب سے اہم حصہ ہوتی ہے۔ یہ محبت بچے کو تحفظ، سکون، اور خوشی فراہم کرتی ہے۔ بچہ جب اپنی ماں کی آغوش میں ہوتا ہے تو اسے دنیا کی ہر چیز بھول جاتی ہے۔ ماں کی محبت کے بغیر زندگی کی کوئی حقیقت نہیں ہوتی۔

دوستی بھی محبت کی ایک اہم شکل ہے۔ دوست وہ لوگ ہوتے ہیں جو ہماری خوشیوں میں شریک ہوتے ہیں اور غموں میں ہمارا ساتھ دیتے ہیں۔ ایک سچا دوست وہ ہوتا ہے جو ہمارے ساتھ ہنستے اور روتے ہیں، ہمیں صحیح راستہ دکھاتے ہیں، اور مشکل وقت میں ہمارا سہارا بنتے ہیں۔ دوستی کی محبت کبھی بھی وقت کی قید میں نہیں آتی۔ یہ ہمیشہ کے لئے ہوتی ہے اور زندگی کے ہر موڑ پر ہمارے ساتھ رہتی ہے۔

محبت کا ایک اور اہم پہلو یہ ہے کہ یہ انسانیت کو آپس میں جوڑتا ہے۔ جب ہم دوسروں کی مدد کرتے ہیں، ان کی مشکلات میں ان کے ساتھ ہوتے ہیں، تو یہ بھی محبت کی ایک شکل ہے۔ محبت کا یہ جذبہ ہمیں خودغرضی سے دور لے جاتا ہے اور ہمیں انسانیت کی خدمت کرنے کا موقع فراہم کرتا ہے۔ دنیا میں محبت کی کمی نہیں، بلکہ ہمیں اسے پہچاننے اور محسوس کرنے کی ضرورت ہے۔

محبت کی طاقت کا ایک اور پہلو یہ ہے کہ یہ ہمیں خوشی اور سکون عطا کرتی ہے۔ جب ہم کسی سے محبت کرتے ہیں تو ہمیں خوشی کا احساس ہوتا ہے۔ محبت ہمیں مثبت سوچنے کی ترغیب دیتی ہے اور زندگی کے چیلنجز کا سامنا کرنے کی قوت دیتی ہے۔ محبت ہمیں زندگی کی تلخیوں سے لڑنے کی ہمت دیتی ہے اور ہمیں یہ احساس دلاتی ہے کہ ہم اکیلے نہیں ہیں۔

محبت کی اہمیت صرف انسانی تعلقات میں نہیں بلکہ یہ سماج کی بہتری میں بھی اہم کردار ادا کرتی ہے۔ جب ہم محبت کے جذبے سے بھری ہوئی زندگی گزارتے ہیں تو ہم معاشرتی مسائل کا سامنا کرنے کی صلاحیت پیدا کرتے ہیں۔ محبت ہمیں نفرت، حسد، اور تعصب سے دور لے جاتی ہے اور ہمیں باہمی احترام اور یکجہتی کا درس دیتی ہے۔

محبت کی طاقت کا ایک اور پہلو یہ ہے کہ یہ ہمیں معاف کرنے کا حوصلہ دیتی ہے۔ جب ہم کسی سے محبت کرتے ہیں تو ہم اس کی خامیوں کو سمجھنے اور معاف کرنے کی کوشش کرتے ہیں۔ یہ معافی کا جذبہ ہمیں سکون عطا کرتا ہے اور ہماری روح کی پاکیزگی کو بڑھاتا ہے۔ محبت کا یہ پہلو ہمیں ایک دوسرے کے قریب لاتا ہے اور ہمارے دلوں کو جوڑتا ہے۔

محبت کے سفر میں چیلنجز بھی آتے ہیں۔ کبھی کبھار محبت میں اختلافات، misunderstandings، اور دوریاں بھی پیدا ہو جاتی ہیں۔ لیکن اصل میں، محبت کا امتحان اس وقت ہوتا ہے جب ہمیں ایک دوسرے کی مشکلات کا سامنا کرنا پڑتا ہے۔ یہ مشکلات محبت کو مزید مضبوط بنا سکتی ہیں، اگر ہم ایک دوسرے کا احترام کریں اور کوشش کریں کہ ہم ایک دوسرے کی خامیوں کو سمجھ سکیں۔

محبت کی طاقت کا ایک بڑا اثر ہماری زندگیوں پر بھی ہوتا ہے۔ جب ہم محبت سے بھرپور ہوتے ہیں تو ہم مثبت طور پر سوچتے ہیں، خوش رہتے ہیں، اور زندگی کا لطف لیتے ہیں۔ یہ محبت ہمیں معاشرتی زندگی میں کامیاب ہونے کی قوت عطا کرتی ہے۔ اس کے برعکس، جب محبت کی کمی ہوتی ہے تو ہم اداسی اور تنہائی محسوس کرتے ہیں۔

آخر میں، محبت ایک ایسا جذبہ ہے جو زندگی کو جینے کا سلیقہ سکھاتا ہے۔ یہ ہمیں سکھاتی ہے کہ کیسے ہم ایک دوسرے کی مدد کر سکتے ہیں، کیسے ہم دوسروں کے لئے خوشی کا باعث بن سکتے ہیں، اور کیسے ہم اپنی زندگیوں میں سکون اور خوشی لا سکتے ہیں۔ محبت کی طاقت کو کبھی کمزور نہیں ہونے دینا چاہئے، بلکہ ہمیں اس کی قدر کرنی چاہئے اور اس کا فروغ دینا چاہئے۔

"
      />
      <News
        title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
        detail="
        محبت ایک ایسی خوبصورت اور طاقتور جذبہ ہے جو انسان کی زندگی میں روشنی اور خوشی بھر دیتی ہے۔ یہ ایک ایسی طاقت ہے جو ہمیں ایک دوسرے کے قریب لاتی ہے، ہمارے دلوں کو جوڑتی ہے اور ہمیں ایک دوسرے کی قدر کرنا سکھاتی ہے۔ محبت کا مفہوم صرف رومانوی تعلقات تک محدود نہیں ہے، بلکہ یہ دوستی، خاندان، اور انسانیت کے درمیان بھی پایا جاتا ہے۔
        
        محبت کی شروعات انسان کی زندگی کے ابتدائی مراحل سے ہی ہوتی ہے۔ ایک بچہ اپنی ماں کی محبت کے بغیر نہیں رہ سکتا۔ ماں کی محبت اس کے لئے سب سے پہلی محبت ہوتی ہے، جو اس کی زندگی کا سب سے اہم حصہ ہوتی ہے۔ یہ محبت بچے کو تحفظ، سکون، اور خوشی فراہم کرتی ہے۔ بچہ جب اپنی ماں کی آغوش میں ہوتا ہے تو اسے دنیا کی ہر چیز بھول جاتی ہے۔ ماں کی محبت کے بغیر زندگی کی کوئی حقیقت نہیں ہوتی۔
        
        دوستی بھی محبت کی ایک اہم شکل ہے۔ دوست وہ لوگ ہوتے ہیں جو ہماری خوشیوں میں شریک ہوتے ہیں اور غموں میں ہمارا ساتھ دیتے ہیں۔ ایک سچا دوست وہ ہوتا ہے جو ہمارے ساتھ ہنستے اور روتے ہیں، ہمیں صحیح راستہ دکھاتے ہیں، اور مشکل وقت میں ہمارا سہارا بنتے ہیں۔ دوستی کی محبت کبھی بھی وقت کی قید میں نہیں آتی۔ یہ ہمیشہ کے لئے ہوتی ہے اور زندگی کے ہر موڑ پر ہمارے ساتھ رہتی ہے۔
        
        محبت کا ایک اور اہم پہلو یہ ہے کہ یہ انسانیت کو آپس میں جوڑتا ہے۔ جب ہم دوسروں کی مدد کرتے ہیں، ان کی مشکلات میں ان کے ساتھ ہوتے ہیں، تو یہ بھی محبت کی ایک شکل ہے۔ محبت کا یہ جذبہ ہمیں خودغرضی سے دور لے جاتا ہے اور ہمیں انسانیت کی خدمت کرنے کا موقع فراہم کرتا ہے۔ دنیا میں محبت کی کمی نہیں، بلکہ ہمیں اسے پہچاننے اور محسوس کرنے کی ضرورت ہے۔
        
        محبت کی طاقت کا ایک اور پہلو یہ ہے کہ یہ ہمیں خوشی اور سکون عطا کرتی ہے۔ جب ہم کسی سے محبت کرتے ہیں تو ہمیں خوشی کا احساس ہوتا ہے۔ محبت ہمیں مثبت سوچنے کی ترغیب دیتی ہے اور زندگی کے چیلنجز کا سامنا کرنے کی قوت دیتی ہے۔ محبت ہمیں زندگی کی تلخیوں سے لڑنے کی ہمت دیتی ہے اور ہمیں یہ احساس دلاتی ہے کہ ہم اکیلے نہیں ہیں۔
        
        محبت کی اہمیت صرف انسانی تعلقات میں نہیں بلکہ یہ سماج کی بہتری میں بھی اہم کردار ادا کرتی ہے۔ جب ہم محبت کے جذبے سے بھری ہوئی زندگی گزارتے ہیں تو ہم معاشرتی مسائل کا سامنا کرنے کی صلاحیت پیدا کرتے ہیں۔ محبت ہمیں نفرت، حسد، اور تعصب سے دور لے جاتی ہے اور ہمیں باہمی احترام اور یکجہتی کا درس دیتی ہے۔
        
        محبت کی طاقت کا ایک اور پہلو یہ ہے کہ یہ ہمیں معاف کرنے کا حوصلہ دیتی ہے۔ جب ہم کسی سے محبت کرتے ہیں تو ہم اس کی خامیوں کو سمجھنے اور معاف کرنے کی کوشش کرتے ہیں۔ یہ معافی کا جذبہ ہمیں سکون عطا کرتا ہے اور ہماری روح کی پاکیزگی کو بڑھاتا ہے۔ محبت کا یہ پہلو ہمیں ایک دوسرے کے قریب لاتا ہے اور ہمارے دلوں کو جوڑتا ہے۔
        
        محبت کے سفر میں چیلنجز بھی آتے ہیں۔ کبھی کبھار محبت میں اختلافات، misunderstandings، اور دوریاں بھی پیدا ہو جاتی ہیں۔ لیکن اصل میں، محبت کا امتحان اس وقت ہوتا ہے جب ہمیں ایک دوسرے کی مشکلات کا سامنا کرنا پڑتا ہے۔ یہ مشکلات محبت کو مزید مضبوط بنا سکتی ہیں، اگر ہم ایک دوسرے کا احترام کریں اور کوشش کریں کہ ہم ایک دوسرے کی خامیوں کو سمجھ سکیں۔
        
        محبت کی طاقت کا ایک بڑا اثر ہماری زندگیوں پر بھی ہوتا ہے۔ جب ہم محبت سے بھرپور ہوتے ہیں تو ہم مثبت طور پر سوچتے ہیں، خوش رہتے ہیں، اور زندگی کا لطف لیتے ہیں۔ یہ محبت ہمیں معاشرتی زندگی میں کامیاب ہونے کی قوت عطا کرتی ہے۔ اس کے برعکس، جب محبت کی کمی ہوتی ہے تو ہم اداسی اور تنہائی محسوس کرتے ہیں۔
        
        آخر میں، محبت ایک ایسا جذبہ ہے جو زندگی کو جینے کا سلیقہ سکھاتا ہے۔ یہ ہمیں سکھاتی ہے کہ کیسے ہم ایک دوسرے کی مدد کر سکتے ہیں، کیسے ہم دوسروں کے لئے خوشی کا باعث بن سکتے ہیں، اور کیسے ہم اپنی زندگیوں میں سکون اور خوشی لا سکتے ہیں۔ محبت کی طاقت کو کبھی کمزور نہیں ہونے دینا چاہئے، بلکہ ہمیں اس کی قدر کرنی چاہئے اور اس کا فروغ دینا چاہئے۔
        
        "
      />
      <News
        title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
        detail="
        محبت ایک ایسی خوبصورت اور طاقتور جذبہ ہے جو انسان کی زندگی میں روشنی اور خوشی بھر دیتی ہے۔ یہ ایک ایسی طاقت ہے جو ہمیں ایک دوسرے کے قریب لاتی ہے، ہمارے دلوں کو جوڑتی ہے اور ہمیں ایک دوسرے کی قدر کرنا سکھاتی ہے۔ محبت کا مفہوم صرف رومانوی تعلقات تک محدود نہیں ہے، بلکہ یہ دوستی، خاندان، اور انسانیت کے درمیان بھی پایا جاتا ہے۔
        
        محبت کی شروعات انسان کی زندگی کے ابتدائی مراحل سے ہی ہوتی ہے۔ ایک بچہ اپنی ماں کی محبت کے بغیر نہیں رہ سکتا۔ ماں کی محبت اس کے لئے سب سے پہلی محبت ہوتی ہے، جو اس کی زندگی کا سب سے اہم حصہ ہوتی ہے۔ یہ محبت بچے کو تحفظ، سکون، اور خوشی فراہم کرتی ہے۔ بچہ جب اپنی ماں کی آغوش میں ہوتا ہے تو اسے دنیا کی ہر چیز بھول جاتی ہے۔ ماں کی محبت کے بغیر زندگی کی کوئی حقیقت نہیں ہوتی۔
        
        دوستی بھی محبت کی ایک اہم شکل ہے۔ دوست وہ لوگ ہوتے ہیں جو ہماری خوشیوں میں شریک ہوتے ہیں اور غموں میں ہمارا ساتھ دیتے ہیں۔ ایک سچا دوست وہ ہوتا ہے جو ہمارے ساتھ ہنستے اور روتے ہیں، ہمیں صحیح راستہ دکھاتے ہیں، اور مشکل وقت میں ہمارا سہارا بنتے ہیں۔ دوستی کی محبت کبھی بھی وقت کی قید میں نہیں آتی۔ یہ ہمیشہ کے لئے ہوتی ہے اور زندگی کے ہر موڑ پر ہمارے ساتھ رہتی ہے۔
        
        محبت کا ایک اور اہم پہلو یہ ہے کہ یہ انسانیت کو آپس میں جوڑتا ہے۔ جب ہم دوسروں کی مدد کرتے ہیں، ان کی مشکلات میں ان کے ساتھ ہوتے ہیں، تو یہ بھی محبت کی ایک شکل ہے۔ محبت کا یہ جذبہ ہمیں خودغرضی سے دور لے جاتا ہے اور ہمیں انسانیت کی خدمت کرنے کا موقع فراہم کرتا ہے۔ دنیا میں محبت کی کمی نہیں، بلکہ ہمیں اسے پہچاننے اور محسوس کرنے کی ضرورت ہے۔
        
        محبت کی طاقت کا ایک اور پہلو یہ ہے کہ یہ ہمیں خوشی اور سکون عطا کرتی ہے۔ جب ہم کسی سے محبت کرتے ہیں تو ہمیں خوشی کا احساس ہوتا ہے۔ محبت ہمیں مثبت سوچنے کی ترغیب دیتی ہے اور زندگی کے چیلنجز کا سامنا کرنے کی قوت دیتی ہے۔ محبت ہمیں زندگی کی تلخیوں سے لڑنے کی ہمت دیتی ہے اور ہمیں یہ احساس دلاتی ہے کہ ہم اکیلے نہیں ہیں۔
        
        محبت کی اہمیت صرف انسانی تعلقات میں نہیں بلکہ یہ سماج کی بہتری میں بھی اہم کردار ادا کرتی ہے۔ جب ہم محبت کے جذبے سے بھری ہوئی زندگی گزارتے ہیں تو ہم معاشرتی مسائل کا سامنا کرنے کی صلاحیت پیدا کرتے ہیں۔ محبت ہمیں نفرت، حسد، اور تعصب سے دور لے جاتی ہے اور ہمیں باہمی احترام اور یکجہتی کا درس دیتی ہے۔
        
        محبت کی طاقت کا ایک اور پہلو یہ ہے کہ یہ ہمیں معاف کرنے کا حوصلہ دیتی ہے۔ جب ہم کسی سے محبت کرتے ہیں تو ہم اس کی خامیوں کو سمجھنے اور معاف کرنے کی کوشش کرتے ہیں۔ یہ معافی کا جذبہ ہمیں سکون عطا کرتا ہے اور ہماری روح کی پاکیزگی کو بڑھاتا ہے۔ محبت کا یہ پہلو ہمیں ایک دوسرے کے قریب لاتا ہے اور ہمارے دلوں کو جوڑتا ہے۔
        
        محبت کے سفر میں چیلنجز بھی آتے ہیں۔ کبھی کبھار محبت میں اختلافات، misunderstandings، اور دوریاں بھی پیدا ہو جاتی ہیں۔ لیکن اصل میں، محبت کا امتحان اس وقت ہوتا ہے جب ہمیں ایک دوسرے کی مشکلات کا سامنا کرنا پڑتا ہے۔ یہ مشکلات محبت کو مزید مضبوط بنا سکتی ہیں، اگر ہم ایک دوسرے کا احترام کریں اور کوشش کریں کہ ہم ایک دوسرے کی خامیوں کو سمجھ سکیں۔
        
        محبت کی طاقت کا ایک بڑا اثر ہماری زندگیوں پر بھی ہوتا ہے۔ جب ہم محبت سے بھرپور ہوتے ہیں تو ہم مثبت طور پر سوچتے ہیں، خوش رہتے ہیں، اور زندگی کا لطف لیتے ہیں۔ یہ محبت ہمیں معاشرتی زندگی میں کامیاب ہونے کی قوت عطا کرتی ہے۔ اس کے برعکس، جب محبت کی کمی ہوتی ہے تو ہم اداسی اور تنہائی محسوس کرتے ہیں۔
        
        آخر میں، محبت ایک ایسا جذبہ ہے جو زندگی کو جینے کا سلیقہ سکھاتا ہے۔ یہ ہمیں سکھاتی ہے کہ کیسے ہم ایک دوسرے کی مدد کر سکتے ہیں، کیسے ہم دوسروں کے لئے خوشی کا باعث بن سکتے ہیں، اور کیسے ہم اپنی زندگیوں میں سکون اور خوشی لا سکتے ہیں۔ محبت کی طاقت کو کبھی کمزور نہیں ہونے دینا چاہئے، بلکہ ہمیں اس کی قدر کرنی چاہئے اور اس کا فروغ دینا چاہئے۔
        
        "
      />
      <News
        title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
        detail="
        محبت ایک ایسی خوبصورت اور طاقتور جذبہ ہے جو انسان کی زندگی میں روشنی اور خوشی بھر دیتی ہے۔ یہ ایک ایسی طاقت ہے جو ہمیں ایک دوسرے کے قریب لاتی ہے، ہمارے دلوں کو جوڑتی ہے اور ہمیں ایک دوسرے کی قدر کرنا سکھاتی ہے۔ محبت کا مفہوم صرف رومانوی تعلقات تک محدود نہیں ہے، بلکہ یہ دوستی، خاندان، اور انسانیت کے درمیان بھی پایا جاتا ہے۔
        
        محبت کی شروعات انسان کی زندگی کے ابتدائی مراحل سے ہی ہوتی ہے۔ ایک بچہ اپنی ماں کی محبت کے بغیر نہیں رہ سکتا۔ ماں کی محبت اس کے لئے سب سے پہلی محبت ہوتی ہے، جو اس کی زندگی کا سب سے اہم حصہ ہوتی ہے۔ یہ محبت بچے کو تحفظ، سکون، اور خوشی فراہم کرتی ہے۔ بچہ جب اپنی ماں کی آغوش میں ہوتا ہے تو اسے دنیا کی ہر چیز بھول جاتی ہے۔ ماں کی محبت کے بغیر زندگی کی کوئی حقیقت نہیں ہوتی۔
        
        دوستی بھی محبت کی ایک اہم شکل ہے۔ دوست وہ لوگ ہوتے ہیں جو ہماری خوشیوں میں شریک ہوتے ہیں اور غموں میں ہمارا ساتھ دیتے ہیں۔ ایک سچا دوست وہ ہوتا ہے جو ہمارے ساتھ ہنستے اور روتے ہیں، ہمیں صحیح راستہ دکھاتے ہیں، اور مشکل وقت میں ہمارا سہارا بنتے ہیں۔ دوستی کی محبت کبھی بھی وقت کی قید میں نہیں آتی۔ یہ ہمیشہ کے لئے ہوتی ہے اور زندگی کے ہر موڑ پر ہمارے ساتھ رہتی ہے۔
        
        محبت کا ایک اور اہم پہلو یہ ہے کہ یہ انسانیت کو آپس میں جوڑتا ہے۔ جب ہم دوسروں کی مدد کرتے ہیں، ان کی مشکلات میں ان کے ساتھ ہوتے ہیں، تو یہ بھی محبت کی ایک شکل ہے۔ محبت کا یہ جذبہ ہمیں خودغرضی سے دور لے جاتا ہے اور ہمیں انسانیت کی خدمت کرنے کا موقع فراہم کرتا ہے۔ دنیا میں محبت کی کمی نہیں، بلکہ ہمیں اسے پہچاننے اور محسوس کرنے کی ضرورت ہے۔
        
        محبت کی طاقت کا ایک اور پہلو یہ ہے کہ یہ ہمیں خوشی اور سکون عطا کرتی ہے۔ جب ہم کسی سے محبت کرتے ہیں تو ہمیں خوشی کا احساس ہوتا ہے۔ محبت ہمیں مثبت سوچنے کی ترغیب دیتی ہے اور زندگی کے چیلنجز کا سامنا کرنے کی قوت دیتی ہے۔ محبت ہمیں زندگی کی تلخیوں سے لڑنے کی ہمت دیتی ہے اور ہمیں یہ احساس دلاتی ہے کہ ہم اکیلے نہیں ہیں۔
        
        محبت کی اہمیت صرف انسانی تعلقات میں نہیں بلکہ یہ سماج کی بہتری میں بھی اہم کردار ادا کرتی ہے۔ جب ہم محبت کے جذبے سے بھری ہوئی زندگی گزارتے ہیں تو ہم معاشرتی مسائل کا سامنا کرنے کی صلاحیت پیدا کرتے ہیں۔ محبت ہمیں نفرت، حسد، اور تعصب سے دور لے جاتی ہے اور ہمیں باہمی احترام اور یکجہتی کا درس دیتی ہے۔
        
        محبت کی طاقت کا ایک اور پہلو یہ ہے کہ یہ ہمیں معاف کرنے کا حوصلہ دیتی ہے۔ جب ہم کسی سے محبت کرتے ہیں تو ہم اس کی خامیوں کو سمجھنے اور معاف کرنے کی کوشش کرتے ہیں۔ یہ معافی کا جذبہ ہمیں سکون عطا کرتا ہے اور ہماری روح کی پاکیزگی کو بڑھاتا ہے۔ محبت کا یہ پہلو ہمیں ایک دوسرے کے قریب لاتا ہے اور ہمارے دلوں کو جوڑتا ہے۔
        
        محبت کے سفر میں چیلنجز بھی آتے ہیں۔ کبھی کبھار محبت میں اختلافات، misunderstandings، اور دوریاں بھی پیدا ہو جاتی ہیں۔ لیکن اصل میں، محبت کا امتحان اس وقت ہوتا ہے جب ہمیں ایک دوسرے کی مشکلات کا سامنا کرنا پڑتا ہے۔ یہ مشکلات محبت کو مزید مضبوط بنا سکتی ہیں، اگر ہم ایک دوسرے کا احترام کریں اور کوشش کریں کہ ہم ایک دوسرے کی خامیوں کو سمجھ سکیں۔
        
        محبت کی طاقت کا ایک بڑا اثر ہماری زندگیوں پر بھی ہوتا ہے۔ جب ہم محبت سے بھرپور ہوتے ہیں تو ہم مثبت طور پر سوچتے ہیں، خوش رہتے ہیں، اور زندگی کا لطف لیتے ہیں۔ یہ محبت ہمیں معاشرتی زندگی میں کامیاب ہونے کی قوت عطا کرتی ہے۔ اس کے برعکس، جب محبت کی کمی ہوتی ہے تو ہم اداسی اور تنہائی محسوس کرتے ہیں۔
        
        آخر میں، محبت ایک ایسا جذبہ ہے جو زندگی کو جینے کا سلیقہ سکھاتا ہے۔ یہ ہمیں سکھاتی ہے کہ کیسے ہم ایک دوسرے کی مدد کر سکتے ہیں، کیسے ہم دوسروں کے لئے خوشی کا باعث بن سکتے ہیں، اور کیسے ہم اپنی زندگیوں میں سکون اور خوشی لا سکتے ہیں۔ محبت کی طاقت کو کبھی کمزور نہیں ہونے دینا چاہئے، بلکہ ہمیں اس کی قدر کرنی چاہئے اور اس کا فروغ دینا چاہئے۔
        
        "
      />
      <News
        title="پارٹی تیار ہے، سڑکوں پر آنے کا اعلان جلد کریں گے، عمران خان"
        img="Images/ik.png"
        detail="
        محبت ایک ایسی خوبصورت اور طاقتور جذبہ ہے جو انسان کی زندگی میں روشنی اور خوشی بھر دیتی ہے۔ یہ ایک ایسی طاقت ہے جو ہمیں ایک دوسرے کے قریب لاتی ہے، ہمارے دلوں کو جوڑتی ہے اور ہمیں ایک دوسرے کی قدر کرنا سکھاتی ہے۔ محبت کا مفہوم صرف رومانوی تعلقات تک محدود نہیں ہے، بلکہ یہ دوستی، خاندان، اور انسانیت کے درمیان بھی پایا جاتا ہے۔
        
        محبت کی شروعات انسان کی زندگی کے ابتدائی مراحل سے ہی ہوتی ہے۔ ایک بچہ اپنی ماں کی محبت کے بغیر نہیں رہ سکتا۔ ماں کی محبت اس کے لئے سب سے پہلی محبت ہوتی ہے، جو اس کی زندگی کا سب سے اہم حصہ ہوتی ہے۔ یہ محبت بچے کو تحفظ، سکون، اور خوشی فراہم کرتی ہے۔ بچہ جب اپنی ماں کی آغوش میں ہوتا ہے تو اسے دنیا کی ہر چیز بھول جاتی ہے۔ ماں کی محبت کے بغیر زندگی کی کوئی حقیقت نہیں ہوتی۔
        
        دوستی بھی محبت کی ایک اہم شکل ہے۔ دوست وہ لوگ ہوتے ہیں جو ہماری خوشیوں میں شریک ہوتے ہیں اور غموں میں ہمارا ساتھ دیتے ہیں۔ ایک سچا دوست وہ ہوتا ہے جو ہمارے ساتھ ہنستے اور روتے ہیں، ہمیں صحیح راستہ دکھاتے ہیں، اور مشکل وقت میں ہمارا سہارا بنتے ہیں۔ دوستی کی محبت کبھی بھی وقت کی قید میں نہیں آتی۔ یہ ہمیشہ کے لئے ہوتی ہے اور زندگی کے ہر موڑ پر ہمارے ساتھ رہتی ہے۔
        
        محبت کا ایک اور اہم پہلو یہ ہے کہ یہ انسانیت کو آپس میں جوڑتا ہے۔ جب ہم دوسروں کی مدد کرتے ہیں، ان کی مشکلات میں ان کے ساتھ ہوتے ہیں، تو یہ بھی محبت کی ایک شکل ہے۔ محبت کا یہ جذبہ ہمیں خودغرضی سے دور لے جاتا ہے اور ہمیں انسانیت کی خدمت کرنے کا موقع فراہم کرتا ہے۔ دنیا میں محبت کی کمی نہیں، بلکہ ہمیں اسے پہچاننے اور محسوس کرنے کی ضرورت ہے۔
        
        محبت کی طاقت کا ایک اور پہلو یہ ہے کہ یہ ہمیں خوشی اور سکون عطا کرتی ہے۔ جب ہم کسی سے محبت کرتے ہیں تو ہمیں خوشی کا احساس ہوتا ہے۔ محبت ہمیں مثبت سوچنے کی ترغیب دیتی ہے اور زندگی کے چیلنجز کا سامنا کرنے کی قوت دیتی ہے۔ محبت ہمیں زندگی کی تلخیوں سے لڑنے کی ہمت دیتی ہے اور ہمیں یہ احساس دلاتی ہے کہ ہم اکیلے نہیں ہیں۔
        
        محبت کی اہمیت صرف انسانی تعلقات میں نہیں بلکہ یہ سماج کی بہتری میں بھی اہم کردار ادا کرتی ہے۔ جب ہم محبت کے جذبے سے بھری ہوئی زندگی گزارتے ہیں تو ہم معاشرتی مسائل کا سامنا کرنے کی صلاحیت پیدا کرتے ہیں۔ محبت ہمیں نفرت، حسد، اور تعصب سے دور لے جاتی ہے اور ہمیں باہمی احترام اور یکجہتی کا درس دیتی ہے۔
        
        محبت کی طاقت کا ایک اور پہلو یہ ہے کہ یہ ہمیں معاف کرنے کا حوصلہ دیتی ہے۔ جب ہم کسی سے محبت کرتے ہیں تو ہم اس کی خامیوں کو سمجھنے اور معاف کرنے کی کوشش کرتے ہیں۔ یہ معافی کا جذبہ ہمیں سکون عطا کرتا ہے اور ہماری روح کی پاکیزگی کو بڑھاتا ہے۔ محبت کا یہ پہلو ہمیں ایک دوسرے کے قریب لاتا ہے اور ہمارے دلوں کو جوڑتا ہے۔
        
        محبت کے سفر میں چیلنجز بھی آتے ہیں۔ کبھی کبھار محبت میں اختلافات، misunderstandings، اور دوریاں بھی پیدا ہو جاتی ہیں۔ لیکن اصل میں، محبت کا امتحان اس وقت ہوتا ہے جب ہمیں ایک دوسرے کی مشکلات کا سامنا کرنا پڑتا ہے۔ یہ مشکلات محبت کو مزید مضبوط بنا سکتی ہیں، اگر ہم ایک دوسرے کا احترام کریں اور کوشش کریں کہ ہم ایک دوسرے کی خامیوں کو سمجھ سکیں۔
        
        محبت کی طاقت کا ایک بڑا اثر ہماری زندگیوں پر بھی ہوتا ہے۔ جب ہم محبت سے بھرپور ہوتے ہیں تو ہم مثبت طور پر سوچتے ہیں، خوش رہتے ہیں، اور زندگی کا لطف لیتے ہیں۔ یہ محبت ہمیں معاشرتی زندگی میں کامیاب ہونے کی قوت عطا کرتی ہے۔ اس کے برعکس، جب محبت کی کمی ہوتی ہے تو ہم اداسی اور تنہائی محسوس کرتے ہیں۔
        
        آخر میں، محبت ایک ایسا جذبہ ہے جو زندگی کو جینے کا سلیقہ سکھاتا ہے۔ یہ ہمیں سکھاتی ہے کہ کیسے ہم ایک دوسرے کی مدد کر سکتے ہیں، کیسے ہم دوسروں کے لئے خوشی کا باعث بن سکتے ہیں، اور کیسے ہم اپنی زندگیوں میں سکون اور خوشی لا سکتے ہیں۔ محبت کی طاقت کو کبھی کمزور نہیں ہونے دینا چاہئے، بلکہ ہمیں اس کی قدر کرنی چاہئے اور اس کا فروغ دینا چاہئے۔
        
        "
      />
    </BoxComponent>
  );
}
