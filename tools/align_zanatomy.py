import json, numpy as np, sys
z = {x['name']: x for x in json.load(open('skel.json'))}
ours = {p['name']: p for p in json.load(open('/home/user/anatomy-/models/parts.json'))}
pairs = []
for zb, ob in [('Femur','femur'),('Humerus','humerus'),('Tibia','tibia'),('Radius','radius'),('Ulna','ulna'),('Patella','patella'),('Calcaneus','calcaneus'),('Clavicle','clavicle'),('Scapula','scapula'),('Hip_bone','hip bone'),('Talus','talus')]:
    for zs, os_ in [('l','left'),('r','right')]:
        if zb+zs in z and f'{os_} {ob}' in ours: pairs.append((zb+zs, f'{os_} {ob}'))
for n in ['Sacrum','Mandible','Frontal_bone']:
    on = n.lower().replace('_',' ')
    if on in ours: pairs.append((n, on))
def c(x): return (np.array(x['min'])+np.array(x['max']))/2
A = np.array([c(z[a]) for a,_ in pairs]); B = np.array([ours[b]['center'] for _,b in pairs])
# Umeyama similarity: B ≈ s R A + t
ma, mb = A.mean(0), B.mean(0); A0, B0 = A-ma, B-mb
U, S, Vt = np.linalg.svd(B0.T @ A0 / len(A))
D = np.eye(3); D[2,2] = np.sign(np.linalg.det(U @ Vt))
R = U @ D @ Vt; s = (S * np.diag(D)).sum() / (A0**2).sum(1).mean(); t = mb - s * R @ ma
res = np.linalg.norm((s*(R@A.T)).T + t - B, axis=1)
for (a,b),r in zip(pairs,res): print(f'{a:14s} {b:16s} {r*1000:6.1f} mm')
print('scale', s); print('R', np.round(R,4)); print('t', t)
json.dump({'s': s, 'R': R.tolist(), 't': t.tolist()}, open('xf.json','w'))
