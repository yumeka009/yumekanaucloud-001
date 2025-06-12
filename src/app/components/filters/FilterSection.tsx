'use client';
import React from 'react';

// FilterSection Component
const FilterSection = () => {
    return (
        <div className="w-full max-w-[1920px] mx-auto space-y-4 mb-12 px-4">
            <div className="flex flex-wrap gap-3 justify-center">
                {/* Value Based Search */}
                <div className="bg-white rounded-[10px] p-8 border border-[#E5E7EB] w-[600px]">
                    <div className="flex items-center gap-2 mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="text-xl font-bold text-[#333333]">価値観で探す</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">高額/高収入である</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">成長チャレンジできる</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">継続リピート相談もあり</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">今までにない新事業/サービス</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">経営ノウハウが身につく</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">好きな時間/場所で働ける</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">企画設計から実装までできる</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">社会に大きな貢献ができる</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">キャリアアップにつながる</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">世界と宇宙に幅広く活躍できる</button>
                    </div>
                </div>

                {/* Job Type Search */}
                <div className="bg-white rounded-[10px] p-8 border border-[#E5E7EB] w-[600px]">
                    <div className="flex items-center gap-2 mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="text-xl font-bold text-[#333333]">職種で探す</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">エンジニア</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">デザイナー</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">広報・PR・バックオフィス</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">営業</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">制作・ライター</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">マーケター</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">人事</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">エグゼクティブ・コンサル</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">Cs</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">PM</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
                {/* Style Search */}
                <div className="bg-white rounded-[10px] p-8 border border-[#E5E7EB] w-[600px]">
                    <div className="flex items-center gap-2 mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="text-xl font-bold text-[#333333]">スタイルで探す</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">業務委託（複業・プロジェクト）</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">業務委託（スキマで副業・バイト）</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">業務委託（専業主・企業・パートナー協業）</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">社員やチーム登用（転職も考慮）</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">その他</button>
                    </div>
                </div>

                {/* Related Theme Search */}
                <div className="bg-white rounded-[10px] p-8 border border-[#E5E7EB] w-[600px]">
                    <div className="flex items-center gap-2 mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 21L16.65 16.65" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="text-xl font-bold text-[#333333]">関連テーマの案件を探す</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">ITエンジニア・複業</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">完全リモート・複業</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">デザイナー複業</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">マーケター複業</button>
                        <button className="h-[46px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#333333] hover:bg-gray-50">週1-OK</button>
                    </div>
                </div>
            </div>

            {/* Related Articles */}
            <div className="space-y-3 px-8 max-w-[1215px] mx-auto rounded-[10px] border border-[#E5E7EB] py-8">
                <div className="flex items-center gap-2 mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 21L16.65 16.65" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className="text-xl font-bold text-[#333333]">関連記事</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    <a href="#" className="block text-[#0066CC] underline">エンジニア向け副業ガイド：案件の種類と選び方</a>
                    <a href="#" className="block text-[#0066CC] underline">エンジニア向け副業ガイド：案件の種類と選び方</a>
                    <a href="#" className="block text-[#0066CC] underline">デザイナー必見！在宅でできる副業案件リスト</a>
                    <a href="#" className="block text-[#0066CC] underline">デザイナー必見！在宅でできる副業案件リスト</a>
                    <a href="#" className="block text-[#0066CC] underline">マーケターのための副業：スキルを活かすポイント</a>
                    <a href="#" className="block text-[#0066CC] underline">マーケターのための副業：スキルを活かすポイント</a>
                    <a href="#" className="block text-[#0066CC] underline">未経験から始める副業：おすすめの仕事と注意点</a>
                    <a href="#" className="block text-[#0066CC] underline">未経験から始める副業：おすすめの仕事と注意点</a>
                    <a href="#" className="block text-[#0066CC] underline">未経験でも迷わない営業方法</a>
                    <a href="#" className="block text-[#0066CC] underline">未経験でも迷わない営業方法</a>
                </div>
            </div>
        </div>
    );
};


export default FilterSection;
