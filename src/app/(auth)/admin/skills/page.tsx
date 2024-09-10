"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SkillsAdminPage() {
  const [skills, setSkills] = useState<{ id: number; title: string; content: string; image: string }[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newSkill, setNewSkill] = useState({ title: '', content: '', image: '' });
  const [editSkill, setEditSkill] = useState<{ id: number; title: string; content: string; image: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      if (typeof document !== 'undefined') {
        const authCookie = document.cookie.split('; ').find(row => row.startsWith('admin_auth='));
        if (!authCookie) {
          router.push('/admin');
        }
      }
    };
    checkAuth();
  }, [router]);

  const SkillCard = ({ id, title, content, image }: { id: number; title: string; content: string; image: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="relative flex justify-center rounded-lg items-center w-[150px] h-[150px] overflow-hidden border border-gray-300 shadow-lg m-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute flex justify-center items-center p-4 bg-secondary rounded-lg text-center transition-transform duration-300 ease-in-out
          ${isHovered ? 'translate-y-[-50%]' : 'translate-y-0'}`}
          style={{ width: '100%', height: '100%' }}
        >
          <Image src={image} alt={title} width={100} height={100} />
        </div>

        <div
          className={`absolute flex flex-col justify-center items-center bg-tertiary border-2 rounded-lg border-black transition-opacity duration-300 ease-in-out
          ${isHovered ? 'opacity-100' : 'opacity-0'} `}
          style={{ width: '100%', height: '100%', top: 0, left: 0 }}
        >
          <p className="text-center text-gray-800 font-semibold">{title}</p>
          <p className="text-center text-gray-600">{content}</p>
          <div className={`flex mt-2 gap-2 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => {
                setEditSkill({ id, title, content, image });
                setShowEditModal(true);
              }}
              className="px-2 py-1 rounded-lg"
            >
              <Image src='/assets/edit-icon.svg' alt='Modifier' width={24} height={24} />
            </button>
            <button
              className="px-2 py-1 rounded-lg"
            >
              <Image src='/assets/delete-icon.svg' alt='Supprimer' width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="flex flex-col items-center justify-center h-auto min-h-screen p-4">
      <h2 className="text-2xl mb-4">Compétences :</h2>
      <button
        onClick={() => setShowAddModal(true)}
        className="bg-blue-500 text-primary px-4 py-2 rounded-lg mb-4"
      >
        Ajouter une compétence +
      </button>
      <div className="flex flex-wrap justify-center">
        {skills.map(skill => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl mb-4 text-center text-tertiary">Ajouter une compétence</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-tertiary" htmlFor="title">Titre</label>
                <input
                  id="title"
                  type="text"
                  value={newSkill.title}
                  onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
                  className="w-full border rounded-lg p-2 text-tertiary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-tertiary" htmlFor="content">Contenu</label>
                <textarea
                  id="content"
                  value={newSkill.content}
                  onChange={(e) => setNewSkill({ ...newSkill, content: e.target.value })}
                  className="w-full border rounded-lg p-2 resize-none text-tertiary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-tertiary" htmlFor="image">URL de l&apos;image</label>
                <input
                  id="image"
                  type="text"
                  value={newSkill.image}
                  onChange={(e) => setNewSkill({ ...newSkill, image: e.target.value })}
                  className="w-full border rounded-lg p-2 text-tertiary"
                  required
                />
              </div>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="submit"
                  className="bg-secondary text-primary px-4 py-2 rounded-lg"
                >
                  Ajouter
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="bg-tertiary text-tertiary border px-4 py-2 rounded-lg"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {editSkill && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl mb-4">Éditer la compétence</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="editTitle">Titre</label>
                <input
                  id="editTitle"
                  type="text"
                  value={editSkill.title}
                  onChange={(e) => setEditSkill({ ...editSkill, title: e.target.value })}
                  className="w-full border rounded-lg p-2 text-tertiary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="editContent">Contenu</label>
                <textarea
                  id="editContent"
                  value={editSkill.content}
                  onChange={(e) => setEditSkill({ ...editSkill, content: e.target.value })}
                  className="w-full border rounded-lg p-2 text-tertiary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="editImage">URL de l&apos;image</label>
                <input
                  id="editImage"
                  type="text"
                  value={editSkill.image}
                  onChange={(e) => setEditSkill({ ...editSkill, image: e.target.value })}
                  className="w-full border rounded-lg p-2 text-tertiary"
                  required
                />
              </div>
              <div className="flex justify-center items-center gap-2">
                <button
                  type="submit"
                  className="bg-secondary text-primary px-4 py-2 rounded-lg"
                >
                  Enregistrer
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="bg-tertiary text-tertiary border px-4 py-2 rounded-lg"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
