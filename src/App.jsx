import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [sshkey, setSshkey] = useState("gkr_raghu");
  const [githubprofile, setGithubprofile] = useState("gkrTech");
  const [repo, setRepo] = useState("test");
  const [branch, setBranch] = useState("main");
  const [clonebranch, setClonebranch] = useState("main");
  const [sshBranch, setSshbranch] = useState("example@gmail.com");
  const [sshuser, setSshuser] = useState("NewUser");
  useEffect(() => {}, [sshkey, githubprofile]);
  return (
    <div className="flex justify-center items-center mt-8 text-sm p-6">
      <div className="big-container relative border-2 rounded-lg flex p-4 flex-wrap gap-1">
        {/* sskh key gen */}
        <div className="ssh-container relative border-2 border-gray-600 p-2 rounded-lg mt-8 pt-5">
          <div className="command flex flex-col">
            <div className="title">Navigate to SSH Directory from Terminal</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("cd ~/.ssh");
              }}
            >
              cd ~/.ssh
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">To see all the files in the directory</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("ls");
              }}
            >
              ls
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">To remove a file</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("rm file_name");
              }}
            >
              rm file_name
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">Open the folder in VS Code</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("code .");
              }}
            >
              code .
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">Generate new SSH key</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(
                  `ssh-keygen -t rsa -C ${sshBranch}`
                );
              }}
            >
              ssh-keygen -t rsa -C {sshBranch}
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">
              Copy the SSH key and paste it in your Github account
            </div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(`pbcopy < ~/.ssh/id_rsa_
              ${sshuser}.pub`);
              }}
            >
              {"pbcopy < ~/.ssh/id_rsa_"}
              {sshuser}.pub
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">Create SSH config file</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("touch config");
              }}
            >
              touch config
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">
              Open Config file using the cmd or "code ."
            </div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("open -e config");
              }}
            >
              open -e config
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">Add the code for each github account.</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(`# Account 1 
                   Host github.com-${sshuser}
                   HostName github.com
                   User git
                   IdentityFile ~/.ssh/id_rsa_${sshuser}`);
              }}
            >
              # Account 1 <br /> Host github.com-{sshuser}
              <br />
              HostName github.com
              <br />
              User git
              <br />
              IdentityFile ~/.ssh/id_rsa_
              {sshuser}
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">Remove all existing identities.</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
              onClick={() => {
                navigator.clipboard.writeText("ssh-add -D");
              }}
            >
              ssh-add -D
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">
              Check to see if the agent has any identifiers.
            </div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
              onClick={() => {
                navigator.clipboard.writeText("ssh-add -l");
              }}
            >
              ssh-add -l
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">Authenticate the keys with Github.</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
              onClick={() => {
                navigator.clipboard.writeText(`ssh -T github.com-${sshuser}`);
              }}
            >
              ssh -T github.com-{sshuser}
            </div>
          </div>
          <div className="ssh-container_input_branchname absolute -top-5 left-5 text-sm">
            <input
              type="text"
              placeholder="Branch"
              className="p-2 rounded-lg border "
              onChange={(e) => setSshbranch(e.target.value)}
            />
          </div>
          <div className="ssh-container_input_new_user absolute -top-5 right-5 text-sm">
            <input
              type="text"
              placeholder="New user"
              className="p-2 rounded-lg border "
              onChange={(e) => setSshuser(e.target.value)}
            />
          </div>
        </div>
        {/* branch */}
        <div className="branch-container relative border-2 border-gray-600 p-2 rounded-lg mt-8 pt-5">
          <div className="command flex flex-col">
            <div className="title">Create new branch</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
              onClick={() => {
                navigator.clipboard.writeText(`git branch ${branch}`);
              }}
            >
              git branch {branch}
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">Show all branchs</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
              onClick={() => {
                navigator.clipboard.writeText("git branch");
              }}
            >
              git branch
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">Switch branch</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
              onClick={() => {
                navigator.clipboard.writeText(`git checkout ${branch}`);
              }}
            >
              git checkout {branch}
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">Delete local branch</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
              onClick={() => {
                navigator.clipboard.writeText(`git branch -D ${branch}`);
              }}
            >
              git branch -D {branch}
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">Delete remote branch</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
              onClick={() => {
                navigator.clipboard.writeText(`git push origin :${branch}`);
              }}
            >
              git push origin :{branch}
            </div>
          </div>
          <div className="branch-container_input_branchname absolute -top-5 left-10 text-sm">
            <input
              type="text"
              placeholder="Branch Name"
              className="p-2 rounded-lg border text-center"
              onChange={(e) => {
                setBranch(e.target.value);
              }}
            />
          </div>
          {/* initialize repo */}
          <div className="initrepo_container border-2 border-gray-600 p-2 rounded-lg mt-8 pt-5">
            <div className="command flex flex-col">
              <div className="title">Remove default .git</div>
              <div
                className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
                onClick={() => {
                  navigator.clipboard.writeText("rm -rf .git");
                }}
              >
                rm -rf .git
              </div>
            </div>
            <div className="command flex flex-col">
              <div className="title">Initialise Git Repo</div>
              <div
                className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
                onClick={() => {
                  navigator.clipboard.writeText("git init");
                }}
              >
                git init
              </div>
            </div>
            <div className="command flex flex-col">
              <div className="title">Add files to staging area</div>
              <div
                className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
                onClick={() => {
                  navigator.clipboard.writeText("git add .");
                }}
              >
                git add .
              </div>
            </div>
            <div className="command flex flex-col">
              <div className="title">Commit changes</div>
              <div
                className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
                onClick={() => {
                  navigator.clipboard.writeText(`git commit -m "modified" `);
                }}
              >
                git commit -m "modified"
              </div>
            </div>
            <div className="command flex flex-col">
              <div className="title">Push to remote Repo</div>
              <div
                className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
                onClick={() => {
                  navigator.clipboard.writeText("git push -u origin main");
                }}
              >
                git push -u origin main
              </div>
            </div>
          </div>
        </div>

        {/* clone */}
        <div className="clone-container relative border-2 border-gray-600 p-2 rounded-lg mt-8">
          <div className="command flex flex-col">
            <div className="title">Git Clone</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
              onClick={() => {
                navigator.clipboard
                  .writeText(`git clone git@github.com-${sshkey}:${githubprofile}/${repo}
              .git`);
              }}
            >
              git clone git@github.com-{sshkey}:{githubprofile}/{repo}
              .git
            </div>
          </div>
          <div className="command flex flex-col">
            <div className="title">Git Clone on specific branch</div>
            <div
              className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
              onClick={() => {
                navigator.clipboard
                  .writeText(`  git clone -b ${clonebranch} git@github.com-${sshkey}:${githubprofile}
              /${repo}.git`);
              }}
            >
              git clone -b {clonebranch} git@github.com-{sshkey}:{githubprofile}
              /{repo}.git
            </div>
          </div>
          <div className="clone-container_input_branchname absolute -top-5 left-[36%] text-sm">
            <input
              type="text"
              placeholder="Branch Name"
              className="p-2 rounded-lg border text-center"
              onChange={(e) => {
                setClonebranch(e.target.value);
              }}
            />
          </div>
          {/* set remote origin */}
          <div className="setremoteorigin_container border-2 border-gray-600 p-2 rounded-lg mt-5">
            <div className="command flex flex-col">
              <div className="title">Check remote for existing repo</div>
              <div
                className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
                onClick={() => {
                  navigator.clipboard.writeText("git remote -v");
                }}
              >
                git remote -v
              </div>
            </div>
            <div className="command flex flex-col">
              <div className="title">Create a main branch</div>
              <div
                className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
                onClick={() => {
                  navigator.clipboard.writeText("git branch -M main");
                }}
              >
                git branch -M main
              </div>
            </div>
            <div className="command flex flex-col">
              <div className="title">Add Origin</div>
              <div
                className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
                onClick={() => {
                  navigator.clipboard
                    .writeText(` git remote add origin git@github.com-${sshkey}:${githubprofile}/
                ${repo}.git`);
                }}
              >
                git remote add origin git@github.com-{sshkey}:{githubprofile}/
                {repo}.git
              </div>
            </div>
            <div className="command flex flex-col">
              <div className="title">Modify the Remote Origin</div>
              <div
                className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
                onClick={() => {
                  navigator.clipboard
                    .writeText(` git remote set-url git@github.com-${sshkey}:${githubprofile}/
                ${repo}.git`);
                }}
              >
                git remote set-url git@github.com-{sshkey}:{githubprofile}/
                {repo}.git
              </div>
            </div>
            <div className="command flex flex-col">
              <div className="title">Check config</div>
              <div
                className="commandcopy bg-gray-800 text-white p-2 rounded-lg"
                onClick={() => {
                  navigator.clipboard.writeText("git config --list");
                }}
              >
                git config --list
              </div>
            </div>
          </div>
        </div>

        <div className="big-container_input_sshkey absolute -top-5 left-[36%] text-sm">
          <select
            name=""
            id=""
            className="p-2 rounded-lg border "
            onChange={(e) => {
              setSshkey(e.target.value);
              if (sshkey !== "") {
                sshkey == "raghu_mac"
                  ? setGithubprofile("gkrTech")
                  : setGithubprofile("sairaghukiran14");
              }
            }}
          >
            <option value="gkr_raghu">gkr_raghu</option>
            <option value="raghu_mac">raghu_mac</option>
          </select>
        </div>
        <div className="big-container_input_repo absolute -top-5 right-[36%] text-sm ">
          <input
            type="text"
            placeholder="Enter Repository"
            className="p-2 rounded-lg border "
            onChange={(e) => {
              setRepo(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
