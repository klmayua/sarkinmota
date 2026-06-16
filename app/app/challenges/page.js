"use client";

import { useState } from "react";
import Image from "next/image";

const triviaQuestions = [
  {
    id: 1,
    question: "Which high-end electric SUV is currently available in only two exclusive units in Nigeria (brought in by Sarkin Mota)?",
    options: [
      { key: "A", text: "Tesla Model Y Performance" },
      { key: "B", text: "Xiaomi YU7 EV" },
      { key: "C", text: "Stelato S9 Luxury" },
      { key: "D", text: "Audi e-tron GT" }
    ],
    answer: "B"
  },
  {
    id: 2,
    question: "The legendary mid-engine Audi R8 supercar, showcased on our homepage, is famous for which engine configuration?",
    options: [
      { key: "A", text: "Twin-Turbocharged V6" },
      { key: "B", text: "Supercharged V8" },
      { key: "C", text: "Naturally Aspirated V10" },
      { key: "D", text: "Quad-Turbocharged W16" }
    ],
    answer: "C"
  },
  {
    id: 3,
    question: "Which Nigerian Customs port is the primary location for clearing luxury vehicles imported by Abuja dealers?",
    options: [
      { key: "A", text: "Tin Can Island Port, Lagos" },
      { key: "B", text: "Port Harcourt Area 1" },
      { key: "C", text: "Calabar Port Complex" },
      { key: "D", text: "Kano Dry Port" }
    ],
    answer: "A"
  }
];

const initialLeaderboard = [
  { rank: 1, username: "alamin_sarkinmota", xp: 14200, badge: "Founder" },
  { rank: 2, username: "kabir_abu", xp: 11800, badge: "Elite Member" },
  { rank: 3, username: "musa_yola", xp: 9550, badge: "Member" },
  { rank: 4, username: "abuja_fan_99", xp: 8100, badge: "Member" }
];

export default function ChallengesPortal() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [leaderboard, setLeaderboard] = useState(initialLeaderboard);

  const handleSelectOption = (key) => {
    setSelectedAnswer(key);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const currentQuestion = triviaQuestions[currentIdx];
    const newAnswers = { ...answers, [currentQuestion.id]: selectedAnswer };
    setAnswers(newAnswers);

    if (currentIdx < triviaQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedAnswer("");
    } else {
      // Calculate results
      let score = 0;
      triviaQuestions.forEach((q) => {
        if (newAnswers[q.id] === q.answer) {
          score += 1;
        }
      });
      const xp = score * 50; // 50 XP per correct answer
      setUserScore(score);
      setXpEarned(xp);

      // Add to leaderboard or increase score
      setLeaderboard((prev) =>
        prev
          .map((user) => {
            if (user.username === "abuja_fan_99") {
              return { ...user, xp: user.xp + xp };
            }
            return user;
          })
          .sort((a, b) => b.xp - a.xp)
          .map((user, idx) => ({ ...user, rank: idx + 1 }))
      );

      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer("");
    setAnswers({});
    setIsFinished(false);
    setUserScore(0);
    setXpEarned(0);
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
      {/* Navigation */}
      <nav className="text-xs text-text-muted mb-4 uppercase tracking-wider">
        <a href="/" className="hover:text-gold transition-colors">Home</a> / <a href="/circle" className="hover:text-gold transition-colors">Circle</a> / <span className="text-gold">Daily Challenges</span>
      </nav>

      {/* Header */}
      <div className="border-b border-white/10 pb-6 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold font-heading uppercase tracking-wide">Daily Trivia & Challenges</h1>
        <p className="text-sm text-text-muted mt-2">Test your gearhead IQ, climb leaderboard rankings, and unlock elite badges.</p>
      </div>

      {/* Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        {/* Main Trivia Frame */}
        <div className="space-y-6">
          {!isFinished ? (
            <div className="bg-panel border border-white/10 rounded-md p-8 shadow-xl space-y-6">
              {/* Question Header */}
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-xs text-gold uppercase tracking-widest font-bold font-heading">
                  Question {currentIdx + 1} of {triviaQuestions.length}
                </span>
                <span className="text-xs text-text-muted font-mono">+50 XP Per Answer</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-black h-1 rounded overflow-hidden">
                <div
                  className="bg-gold h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / triviaQuestions.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Content */}
              <h2 className="text-lg md:text-xl font-medium leading-relaxed">
                {triviaQuestions[currentIdx].question}
              </h2>

              {/* Options */}
              <div className="grid grid-cols-1 gap-4 pt-2">
                {triviaQuestions[currentIdx].options.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.key)}
                    className={`flex items-center gap-4 text-left p-4 rounded border text-sm transition-all ${
                      selectedAnswer === opt.key
                        ? "bg-gold/10 border-gold text-white"
                        : "bg-black/40 border-white/10 hover:border-gold/50 text-text-muted hover:text-white"
                    }`}
                  >
                    <span className={`size-6 rounded-full border text-xs font-bold flex items-center justify-center ${
                      selectedAnswer === opt.key ? "bg-gold text-black border-gold" : "border-white/20 text-white"
                    }`}>
                      {opt.key}
                    </span>
                    <span>{opt.text}</span>
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end pt-4 border-t border-white/5">
                <button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className={`px-8 py-3 rounded text-xs uppercase font-bold tracking-widest font-heading transition-all ${
                    selectedAnswer
                      ? "bg-gold text-black hover:bg-gold-glow"
                      : "bg-white/5 text-text-muted cursor-not-allowed border border-white/5"
                  }`}
                >
                  {currentIdx === triviaQuestions.length - 1 ? "Submit Answers" : "Next Question"}
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-panel border border-gold/30 rounded-md p-10 shadow-2xl text-center space-y-6">
              <span className="text-5xl block animate-bounce">🏆</span>
              <h2 className="text-2xl md:text-3xl font-black font-heading uppercase text-gold">Challenge Completed!</h2>
              
              <div className="max-w-xs mx-auto py-6 px-4 bg-black/40 border border-white/5 rounded-md grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-text-muted uppercase block">Correct Answers</span>
                  <span className="text-2xl font-bold text-white">{userScore} / {triviaQuestions.length}</span>
                </div>
                <div>
                  <span className="text-[10px] text-text-muted uppercase block">XP Earned</span>
                  <span className="text-2xl font-bold text-gold">+{xpEarned} XP</span>
                </div>
              </div>

              {userScore === triviaQuestions.length && (
                <div className="bg-gold/10 border border-gold/30 rounded-md p-4 max-w-md mx-auto flex gap-4 items-center text-left">
                  <span className="text-3xl">🎓</span>
                  <div>
                    <h4 className="text-xs uppercase text-gold font-bold">New Badge Unlocked!</h4>
                    <p className="text-[11px] text-text-muted mt-0.5">You earned the <strong>Sarkin Mota Scholar</strong> badge for scoring 100% on today's trivia.</p>
                  </div>
                </div>
              )}

              <p className="text-xs text-text-muted max-w-sm mx-auto leading-relaxed">
                Good job, My Bratha! Play again tomorrow to maintain your leaderboard position and unlock more achievement trophies.
              </p>

              <div className="pt-4 border-t border-white/5 flex gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded text-xs uppercase font-bold tracking-wider font-heading transition-all"
                >
                  Retake Trivia
                </button>
                <a
                  href="/circle"
                  className="px-6 py-2.5 bg-gold hover:bg-gold-glow text-black rounded text-xs uppercase font-bold tracking-wider font-heading transition-all"
                >
                  Share to Circle Feed
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Leaderboard & Trophies */}
        <aside className="space-y-6">
          {/* Leaderboard Panel */}
          <div className="bg-panel border border-white/10 rounded-md p-6 space-y-4 shadow-xl">
            <h3 className="text-xs uppercase tracking-widest text-gold font-bold border-b border-white/10 pb-2">
              XP Leaderboard
            </h3>
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div key={user.username} className={`flex items-center justify-between p-2 rounded text-xs ${
                  user.username === "abuja_fan_99" ? "bg-gold/10 border border-gold/20" : ""
                }`}>
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold size-5 flex items-center justify-center rounded-full ${
                      user.rank === 1 ? "bg-gold text-black" : "text-text-muted"
                    }`}>
                      #{user.rank}
                    </span>
                    <div>
                      <span className="font-bold text-white block">@{user.username}</span>
                      <span className="text-[9px] text-text-muted lowercase">{user.badge}</span>
                    </div>
                  </div>
                  <span className="font-bold text-gold font-mono">{user.xp.toLocaleString()} XP</span>
                </div>
              ))}
            </div>
          </div>

          {/* Badge Trophy Cabinet */}
          <div className="bg-panel border border-white/10 rounded-md p-6 space-y-4 shadow-xl">
            <h3 className="text-xs uppercase tracking-widest text-gold font-bold border-b border-white/10 pb-2">
              Your Badge Trophy Case
            </h3>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 bg-black/40 border border-white/5 rounded flex flex-col items-center">
                <span className="text-2xl">🎓</span>
                <span className="text-[10px] font-bold mt-1 text-white">Sarkin Mota Scholar</span>
                <span className="text-[8px] text-gold mt-0.5 uppercase tracking-tighter">
                  {userScore === triviaQuestions.length ? "Unlocked" : "Locked"}
                </span>
              </div>
              <div className="p-3 bg-black/40 border border-white/5 rounded flex flex-col items-center opacity-40">
                <span className="text-2xl">⚡</span>
                <span className="text-[10px] font-bold mt-1 text-white">EV Pioneer</span>
                <span className="text-[8px] text-text-muted mt-0.5 uppercase tracking-tighter">Locked</span>
              </div>
              <div className="p-3 bg-black/40 border border-white/5 rounded flex flex-col items-center opacity-40">
                <span className="text-2xl">🏁</span>
                <span className="text-[10px] font-bold mt-1 text-white">Drift King</span>
                <span className="text-[8px] text-text-muted mt-0.5 uppercase tracking-tighter">Locked</span>
              </div>
              <div className="p-3 bg-black/40 border border-white/5 rounded flex flex-col items-center opacity-40">
                <span className="text-2xl">🛡️</span>
                <span className="text-[10px] font-bold mt-1 text-white">Abuja Elite</span>
                <span className="text-[8px] text-text-muted mt-0.5 uppercase tracking-tighter">Locked</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
