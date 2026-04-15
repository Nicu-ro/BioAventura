import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { categoryLabel } = await req.json();
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) return NextResponse.json({ fact: "Lipsește cheia API!" }, { status: 500 });

    const subject = categoryLabel || 'biologie';
    const timestamp = Date.now();

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `ID: ${timestamp}. Ești un expert în biologie. 
            Spune-mi o curiozitate scurtă despre ${subject} în română. 
            IMPORTANT: Răspunde într-o singură propoziție scurtă (maxim 15 cuvinte). 
            Nu folosi introduceri.`
          }]
        }],
        generationConfig: {
          temperature: 1.0,
          // We keep this high to ensure it doesn't cut off, 
          // but the prompt above will keep the actual text short.
          maxOutputTokens: 800, 
        }
      })
    });

    const data = await response.json();

    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      let fact = data.candidates[0].content.parts[0].text.trim();
      
      // Remove any quotes the AI might add
      fact = fact.replace(/^["']|["']$/g, '');

      return NextResponse.json({ fact: fact });
    }

    return NextResponse.json({ fact: "Variația biologică e mare! Mai apasă o dată." });

  } catch (error) {
    return NextResponse.json({ fact: "Eroare de conexiune la server." });
  }
}